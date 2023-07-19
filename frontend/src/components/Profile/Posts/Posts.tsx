import type { InfiniteData } from "@tanstack/react-query";

import Post from "@src/components/Community/Post";
import Skeleton from "@src/components/Common/Skeleton";
import FormToolkit from "@src/components/FormToolkit";

import type { ApiFindManyPostOfMeResponse } from "@src/types/apis";

interface Props {
  /** 컴포넌트 이름 */
  label: string;
  /** useInfiniteQuery를 통해 얻은 게시글 데이터 */
  posts?: InfiniteData<ApiFindManyPostOfMeResponse>;
  /** 다음 페이지 존재 여부 ( useInfiniteQuery ) */
  hasNextPage?: boolean;
  /** 다음 페이지 패치 ( useInfiniteQuery ) */
  fetchNextPage: () => void;
  /** 다음 페이지 패치중인지 여부 ( useInfiniteQuery ) */
  isFetching: boolean;
  /** 첫 페이지 패치중인지 여부 ( useInfiniteQuery ) */
  isLoading: boolean;
}

/** 2023/07/19 - 내가 작성/좋아요/싫어요한 게시글들 컴포넌트 - by 1-blue */
const Posts: React.FC<Props> = ({
  label,
  posts,
  hasNextPage,
  fetchNextPage,
  isFetching,
  isLoading,
}) => {
  if (isLoading)
    return (
      <div className="mt-8 -mx-4">
        <Skeleton.Square className="w-full h-16" />
      </div>
    );

  return (
    <details className="my-box mt-8 -mx-4 space-y-4 cursor-pointer transition-colors hover:text-main-text/80">
      <summary className="text-xl font-bold">내가 {label}</summary>

      {/* 내가 작성한 게시글들 */}
      <ul className="grid gap-4 grid-cols-1 xssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {posts?.pages.map((page) =>
          page.map((post) => <Post key={post.idx} {...post} />)
        )}
        {isFetching &&
          Array(6)
            .fill(null)
            .map((_, i) => <Skeleton.Post key={i} />)}
      </ul>

      {posts?.pages[0].length === 0 && (
        <span className="text-2xl font-bold font-sub block text-center">
          {label}이 없습니다!
        </span>
      )}

      {/* 게시글 더 불러오기 */}
      {hasNextPage && !isLoading && (
        <FormToolkit.Button
          type="button"
          label="게시글 더 불러오기"
          onClick={() => fetchNextPage()}
          className="mt-6 text-xs px-3 block ml-auto"
        />
      )}
    </details>
  );
};

export default Posts;
