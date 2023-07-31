import { useQueryClient } from "@tanstack/react-query";
import { Link, Navigate } from "react-router-dom";
import { isAxiosError } from "axios";

import { apiSignOut } from "@src/apis";

import QUERY_KEYS, {
  useGetMe,
  useFindManyLikedPostOfMe,
  useFindManyHatedPostOfMe,
  useFindManyPostOfMe,
} from "@src/query";

import FormToolkit from "@src/components/FormToolkit";
import Posts from "@src/components/Profile/Posts";

/** 2023/07/07 - 프로필 페이지 - by 1-blue */
const Profile: React.FC = () => {
  const queryClient = useQueryClient();
  const { me, isLoading } = useGetMe();
  const { posts, ...restWritten } = useFindManyPostOfMe({
    start: -1,
    count: 20,
  });
  const { likedPosts, ...restLiked } = useFindManyLikedPostOfMe({
    start: -1,
    count: 20,
  });
  const { hatedPosts, ...restHated } = useFindManyHatedPostOfMe({
    start: -1,
    count: 20,
  });

  /** 2023/07/07 - 로그아웃 요청 - by 1-blue */
  const onSignUpHandler = async () => {
    try {
      await apiSignOut({});

      alert("로그아웃에 성공했습니다.\n로그인 페이지로 이동됩니다.");

      // 로그인한 유저 데이터 제거
      queryClient.setQueryData([QUERY_KEYS.ME], null);
      sessionStorage.removeItem("me");
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) return;

        const { message } = error.response.data;

        alert(message);
      } else {
        console.error("error >> ", error);
      }
    }
  };

  if (isLoading && !me) return <Navigate to="/" replace />;
  if (!me) return <></>;

  return (
    <>
      <article className="relative flex flex-col justify-center items-center -mx-4 my-box">
        {/* 내 정보 */}
        <figure>
          <img
            src={me.avatar}
            alt={`${me.nickname}님의 아바타`}
            className="w-24 h-24 rounded-md"
          />
        </figure>

        <section className="flex flex-col items-center space-y-0.5">
          <span className="text-lg font-bold">{me.nickname}</span>
          <Link
            to={`/summoner?q=${me.summonerName}`}
            className="text-sm text-gray-500 transition-colors hover:text-gray-400 hover:underline hover:underline-offset-4"
          >
            {me.summonerName}
          </Link>
        </section>

        {/* 로그아웃 버튼 */}
        <section className="absolute right-4 h-full py-4 flex flex-col justify-between">
          <FormToolkit.Button
            type="button"
            label="로그아웃"
            className="text-xs px-3 py-2"
            onClick={onSignUpHandler}
          />
          <Link
            to="/profile/update"
            replace
            className="text-xs text-center transition-colors hover:underline hover:underline-offset-4 hover:text-main-text/90 hover:underline-main-text/90"
          >
            정보 수정
          </Link>
        </section>
      </article>

      {/* 내 게시글 */}
      <Posts label="작성한 게시글" posts={posts} {...restWritten} />

      {/* 내가 좋아요한 게시글들 */}
      <Posts
        label="좋아요한 게시글"
        posts={
          likedPosts && {
            ...likedPosts,
            pages: likedPosts.pages.map((page) => page.map(({ post }) => post)),
          }
        }
        {...restLiked}
      />

      {/* 내가 싫어요한 게시글 */}
      <Posts
        label="싫어요한 게시글"
        posts={
          hatedPosts && {
            ...hatedPosts,
            pages: hatedPosts.pages.map((page) => page.map(({ post }) => post)),
          }
        }
        {...restHated}
      />
    </>
  );
};

export default Profile;
