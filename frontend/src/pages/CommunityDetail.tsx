import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { dateOrTimeFormat } from "@src/libs";

import {
  useGetMe,
  useFindOnePost,
  useAddViewCountOfPost,
  useDeletePost,
  useFindManyComment,
  useDeleteComment,
} from "@src/query";

import Skeleton from "@src/components/Common/Skeleton";
import PostInfo from "@src/components/Community/PostInfo";
import Comment from "@src/components/Community/Comment";
import CommentForm from "@src/components/Community/CommentForm";
import FormToolkit from "@src/components/FormToolkit";

/** 2023/07/12 - 커뮤니티 상세 페이지 컴포넌트 - by 1-blue */
const CommunityDetail: React.FC = () => {
  const idx = Number(useParams<{ idx: string }>().idx || 0);

  const { me } = useGetMe();
  const { post, isLoading } = useFindOnePost({ idx });
  const {
    comments,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading: isLoadingComment,
  } = useFindManyComment({
    postIdx: idx,
    start: -1,
    count: 20,
  });

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

  const deleteCommentMutate = useDeleteComment();

  /** 2023/07/16 - 댓글 삭제 핸들러 ( 버블링 ) - by 1-blue  */
  const onDeleteComment: React.MouseEventHandler<HTMLUListElement> = ({
    target,
  }) => {
    if (!(target instanceof HTMLButtonElement)) return;

    if (!target.dataset.type) return;
    if (!target.dataset.commentIdx) return;

    const { type, commentIdx } = target.dataset;

    // 댓글 제거
    if (type === "delete") {
      deleteCommentMutate({ postIdx: idx, commentIdx: +commentIdx });
    }
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

      {idx && me && (
        <article>
          {/* 댓글폼 */}
          <CommentForm postIdx={idx} />
        </article>
      )}

      <article className="my-box mt-4">
        {/* 댓글 */}
        {comments && (
          <ul className="flex flex-col space-y-4" onClick={onDeleteComment}>
            {comments.pages.map((page) =>
              page.map((comment) => <Comment key={comment.idx} {...comment} />)
            )}
          </ul>
        )}

        {/* 스켈레톤 */}
        {(isFetching || isLoadingComment) && (
          <ul className="mt-4 flex flex-col space-y-4">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Skeleton.Comment key={i} />
              ))}
          </ul>
        )}

        {/* 댓글 더 불러오기 */}
        {hasNextPage && !isFetching && (
          <FormToolkit.Button
            type="button"
            label="댓글 더 불러오기"
            onClick={() => fetchNextPage()}
            className="mt-6 text-xs px-3 block ml-auto"
          />
        )}

        {/* 댓글 없음 */}
        {!hasNextPage && (
          <span className="inline-block my-box mt-4 w-full py-10 text-center font-bold font-sub text-2xl">
            불러올 댓글이 없습니다!
          </span>
        )}
      </article>
    </>
  );
};

export default CommunityDetail;
