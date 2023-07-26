import { useFindManyPost, useGetLeague } from "@src/query";

import LeagueBedge from "@src/components/Riot/League/LeagueBedge";
import Skeleton from "@src/components/Common/Skeleton";
import Animate from "@src/components/Animate";
import Post from "@src/components/Community/Post";

/** 2023/06/19 - 메인 페이지 컴포넌트 - by 1-blue */
const Home: React.FC = () => {
  const { leagues: challengerLeagues } = useGetLeague({
    league: "challenger",
  });
  const { leagues: grandmasterLeagues } = useGetLeague({
    league: "grandmaster",
  });
  const { leagues: masterLeagues } = useGetLeague({
    league: "master",
  });
  const { posts } = useFindManyPost({
    start: -1,
    count: 10,
    sortBy: "popular",
  });

  if (!challengerLeagues) return <Skeleton.Home />;
  if (!grandmasterLeagues) return <Skeleton.Home />;
  if (!masterLeagues) return <Skeleton.Home />;
  if (!posts) return <Skeleton.Home />;

  return (
    <article className="space-y-8">
      {/* 챌린저 랭킹 */}
      <details className="my-box -mx-4 space-y-4 cursor-pointer transition-colors hover:text-main-text/80">
        <summary className="text-xl font-bold mb-1">챌린저 순위</summary>
        <ul className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {challengerLeagues.map((league, index) => (
            <LeagueBedge
              key={league.summonerName}
              league={league}
              ranking={index}
            />
          ))}
        </ul>
      </details>

      {/* 그랜드 마스터 랭킹 */}
      <details className="my-box -mx-4 space-y-4 cursor-pointer transition-colors hover:text-main-text/80">
        <summary className="text-xl font-bold mb-1">그랜드 마스터 순위</summary>
        <ul className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {grandmasterLeagues.map((league, index) => (
            <LeagueBedge
              key={league.summonerName}
              league={league}
              ranking={index + challengerLeagues.length}
            />
          ))}
        </ul>
      </details>

      {/* 마스터 랭킹 */}
      <details className="my-box -mx-4 space-y-4 cursor-pointer transition-colors hover:text-main-text/80">
        <summary className="text-xl font-bold mb-1">마스터 순위</summary>
        <ul className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {masterLeagues.map((league, index) => (
            <LeagueBedge
              key={league.summonerName}
              league={league}
              ranking={
                index + challengerLeagues.length + grandmasterLeagues.length
              }
            />
          ))}
        </ul>
      </details>

      {/* 인기 게시글 */}
      <details className="my-box -mx-4 space-y-4 cursor-pointer transition-colors hover:text-main-text/80">
        <summary className="text-xl font-bold mb-1">인기 게시글</summary>
        <Animate.Wrapper transition={{ staggerChildren: 0.15 }}>
          <ul className="grid gap-6 grid-cols-1 xssm:grid-cols-2 md:grid-cols-1 mdlg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {posts?.pages.map((page) =>
              page.map((post) => <Post key={post.idx} {...post} />)
            )}
          </ul>
        </Animate.Wrapper>
      </details>
    </article>
  );
};

export default Home;
