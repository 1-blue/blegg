import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { dateOrTimeFormat } from "@src/libs";

import { useGetMe } from "@src/query/useGetMe";
import { useFindOnePost } from "@src/query/useFindOnePost";
import { useAddViewCountOfPost } from "@src/query/useAddViewCountOfPost";
import { useDeletePost } from "@src/query/useDeletePost";

import PostInfo from "@src/components/Community/PostInfo";
import Skeleton from "@src/components/Common/Skeleton";

/** 2023/07/12 - 커뮤니티 상세 페이지 컴포넌트 - by 1-blue */
const CommunityDetail: React.FC = () => {
  const idx = Number(useParams<{ idx: string }>().idx || 0);

  const { me } = useGetMe();
  const { post, isLoading } = useFindOnePost({ idx });

  const addViewCountMutate = useAddViewCountOfPost({ idx });
  const deletePostMutate = useDeletePost();

  /** 2023/07/15 - 조회수 처리 ( sessionStorage ) - by 1-blue */
  useEffect(() => {
    const viewed = JSON.parse(sessionStorage.getItem("viewed") || "[]");

    if (!Array.isArray(viewed)) return;
    if (viewed.includes(idx)) return;

    sessionStorage.setItem("viewed", JSON.stringify([...viewed, idx]));
    addViewCountMutate({ idx });
  }, [idx, addViewCountMutate]);

  /** 2023/07/15 - 게시글 제거 - by 1-blue */
  const onDeletePost = () => {
    if (!confirm("게시글을 제거하시겠습니까?")) return;

    deletePostMutate({ idx });
  };

  if (isLoading) return <Skeleton.CommunityDetail />;
  if (!isLoading && !post) {
    alert("해당 게시글이 없습니다!");
    return <Navigate to="/community" />;
  }
  if (!post) return <Navigate to="/community" />;

  return (
    <>
      <article className="my-box space-y-2">
        {/* 제목 / ( 수정 및 삭제 ) / 작성시간 */}
        <section className="flex justify-between space-x-3">
          <h1 className="flex-1 text-2xl font-bold truncate truncate-1">
            {post.title}
          </h1>
          {me?.idx === post.userIdx && (
            <>
              <Link
                to={`/community/${idx}/update`}
                className="text-sm self-start"
              >
                수정
              </Link>
              <button
                type="button"
                className="text-sm self-start"
                onClick={onDeletePost}
              >
                삭제
              </button>
            </>
          )}
          <time className="text-xs">{dateOrTimeFormat(post.updatedAt)}</time>
        </section>

        {/* 작성자 / 조회수 / 댓글수 / 좋아요수 / 싫어요수 / 공유 */}
        <PostInfo {...post} />
      </article>

      <article className="my-box mt-4 space-y-8">
        {/* 썸네일 */}
        <figure className="bg-main-100 rounded-md">
          <img src={post.thumbnail} alt="게시글 썸네일" className="mx-auto" />
        </figure>

        {/* 내용 */}
        <p className="whitespace-pre-wrap break-words">{post.content}</p>

        {/* 아바타 && 좋아요 및 싫어요 버튼 */}
        <PostInfo {...post} />
      </article>

      {/* 댓글 */}
      <article className="my-box mt-4"></article>
    </>
  );
};

export default CommunityDetail;
