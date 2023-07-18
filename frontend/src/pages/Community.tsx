import { Link, useSearchParams } from "react-router-dom";
import { PencilSquareIcon as OPencilSquareIcon } from "@heroicons/react/24/outline";

import { useFindManyPost } from "@src/query";

import Post from "@src/components/Community/Post";
import Animate from "@src/components/Animate";
import Skeleton from "@src/components/Common/Skeleton";
import Nav from "@src/components/Community/Nav";
import Container from "@src/components/Container";

import type { SortBy } from "@src/types";

/** 2023/06/19 - 커뮤니티 페이지 컴포넌트 - by 1-blue */
const Community: React.FC = () => {
  const seatchParams = useSearchParams()[0];
  const sortBy = (seatchParams.get("s") || "recent") as SortBy;
  const search = seatchParams.get("q");

  const { posts, isFetching, isLoading, fetchNextPage, hasNextPage } =
    useFindManyPost({
      start: -1,
      count: 20,
      sortBy,
      search,
    });

  return (
    <>
      {/* 게시글 정렬 && 게시글 검색 */}
      <Nav />

      {/* 게시글 작성 */}
      <aside className="fixed bottom-4 right-4 flex justify-center items-center rounded-full bg-main-line border border-main-line text-main-text transition-colors hover:bg-main-line/95 z-[2]">
        <Link to="/community/create" className="inline-block p-3">
          <OPencilSquareIcon className="w-6 h-6" />
        </Link>
      </aside>

      {/* 특정 조건으로 검색된 게시글들인 경우 검색어 표시 */}
      {search && (
        <div className="my-12 block font-bold text-2xl border-2 border-main-line text-main-text p-4 rounded-md text-center">
          <span className="font-black">"{search}"</span>
          <span>검색 결과</span>
        </div>
      )}

      {/* 게시글 리스트 */}
      {isLoading ? (
        // loading
        <ul className="grid gap-6 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {Array(6)
            .fill(null)
            .map((_v, i) => (
              <Skeleton.Post key={i} />
            ))}
        </ul>
      ) : (
        // post
        <Container.InfiniteScroll
          fetchMore={fetchNextPage}
          hasMore={hasNextPage}
        >
          <Animate.Wrapper transition={{ staggerChildren: 0.15 }}>
            <ul className="grid gap-6 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {posts?.pages.map((page) =>
                page.map((post) => <Post key={post.idx} {...post} />)
              )}
            </ul>
          </Animate.Wrapper>
        </Container.InfiniteScroll>
      )}

      {/* fetch more */}
      {isFetching && (
        <ul className="mt-6 grid gap-6 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {Array(6)
            .fill(null)
            .map((_v, i) => (
              <Skeleton.Post key={i} />
            ))}
        </ul>
      )}

      {/* 조건에 만족한 모든 게시글들을 불러온 경우 */}
      {!hasNextPage && (
        <span className="my-12 block font-sub font-bold text-3xl border-2 border-main-line text-main-text p-4 rounded-md text-center">
          더 이상 불러올 게시글이 없습니다... 🥲
        </span>
      )}
    </>
  );
};

export default Community;
