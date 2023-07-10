import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";

import { apiSignOut } from "@src/apis";

import QUERY_KEYS from "@src/query";
import { useGetMe } from "@src/query/useGetMe";

import FormToolkit from "@src/components/FormToolkit";

/** 2023/07/07 - 프로필 페이지 - by 1-blue */
const Profile: React.FC = () => {
  const queryClient = useQueryClient();
  const { me } = useGetMe();

  /** 2023/07/07 - 로그아웃 요청 - by 1-blue */
  const onSignUpHandler = async () => {
    try {
      await apiSignOut({});

      alert("로그아웃에 성공했습니다.\n로그인 페이지로 이동됩니다.");

      // 로그인한 유저 데이터 제거
      queryClient.setQueryData([QUERY_KEYS.ME], null);
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

  // TODO: Skeleton UI
  if (!me) return <></>;

  return (
    <>
      <article className="relative flex flex-col justify-center items-center -mx-4 p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
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
        <section className="absolute top-0 right-4">
          <FormToolkit.Button
            type="button"
            label="로그아웃"
            className="text-xs px-3 py-2"
            onClick={onSignUpHandler}
          />
        </section>
      </article>

      {/* 내 게시글/댓글 */}
      <article className="mt-8 -mx-4 grid gap-4 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {/* 내가 작성한 게시글들 */}
        <section className="p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
          <h5>내가 작성한 게시글들 게시글들</h5>
        </section>
        {/* 내가 작성한 댓글들 */}
        <section className="p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
          <h5>내가 작성한 댓글들 게시글들</h5>
        </section>
      </article>

      {/* 좋아요/싫어요 게시글 */}
      <article className="mt-8 -mx-4 grid gap-4 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {/* 좋아요 누른 게시글들 */}
        <section className="p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
          <h5>좋아요 누른 게시글들</h5>
        </section>
        {/* 싫어요 누른 게시글들 */}
        <section className="p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
          <h5>싫어요 누른 게시글들</h5>
        </section>
      </article>

      {/* 좋아요/싫어요 댓글 */}
      <article className="mt-8 -mx-4 grid gap-4 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {/* 좋아요 누른 댓글들 */}
        <section className="p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
          <h5>좋아요 누른 댓글들</h5>
        </section>
        {/* 싫어요 누른 댓글들 */}
        <section className="p-6 space-y-4 bg-main-box-bg border border-main-line rounded-md">
          <h5>싫어요 누른 댓글들</h5>
        </section>
      </article>
    </>
  );
};

export default Profile;
