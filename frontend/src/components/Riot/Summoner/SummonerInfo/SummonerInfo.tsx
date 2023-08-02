import { useGetSummoner } from "@src/query";

import Skeleton from "@src/components/Common/Skeleton";

import type { ApiGetSummonerResponse } from "@src/types/apis";
import NotFound from "@src/components/Common/NotFound/NotFound";
import { convertS3ImageURL } from "@src/libs";

interface Props {
  /** 최근 전적을 검색할 소환사 이름 */
  name: string;
  /** React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값 */
  initialData?: ApiGetSummonerResponse;
}

/** 2023/07/02 - 특정 유저의 정보 ( 레벨, 아이콘, 솔로/자유랭크 정보 ) - by 1-blue */
const SummonerInfo: React.FC<Props> = ({ name, initialData }) => {
  const { summoner, isLoading } = useGetSummoner({ name }, initialData);

  // loading
  if (isLoading) return <Skeleton.SummonerInfo name={name} />;
  // 404
  if (!summoner)
    return (
      <NotFound
        title={`"${name}"님을 찾을 수 없습니다.`}
        sub="다른 소환사를 검색해주세요!"
      />
    );

  const { info, soloRank, freeRank } = summoner;

  return (
    <article className="mt-6 -mx-4 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {/* 아이콘/레벨 / 닉네임/솔로랭크/자유랭크 */}
      <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
        {/* 아이콘/레벨 */}
        <figure className="flex-shrink-0 relative">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 px-2 py-0.5 text-xs rounded-full whitespace-nowrap">
            Lv. {info.level}
          </span>
          <img
            src={info.profileIconSrc}
            alt={`${info.name}님의 아이콘`}
            className="w-28 h-28 rounded-md"
          />
        </figure>

        {/* 닉네임/솔로랭크/자유랭크 */}
        <div className="space-y-1.5">
          {/* 닉네임 */}
          <h2 className="text-2xl font-bold tracking-widest break-all">
            {info.name}
          </h2>

          {/* 솔로랭크 */}
          <div className="flex flex-col">
            <span className="text-sm">솔로랭크</span>
            {soloRank ? (
              <span className="text-xxs">
                {soloRank.tier} {soloRank.rank} {soloRank.leaguePoints} LP
              </span>
            ) : (
              <span className="text-xxs">UNRANKED</span>
            )}
          </div>

          {/* 자유랭크 */}
          <div className="flex flex-col">
            <span className="text-sm">자유랭크</span>
            {freeRank ? (
              <span className="text-xxs">
                {freeRank.tier} {freeRank.rank} {freeRank.leaguePoints} LP
              </span>
            ) : (
              <span className="text-xxs">UNRANKED</span>
            )}
          </div>
        </div>
      </section>

      {/* 솔로랭크 */}
      {soloRank ? (
        <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
          {/* 티어 이미지 */}
          <img
            src={convertS3ImageURL(
              `/images/emblem/${soloRank.tier.toLowerCase()}.png`
            )}
            alt={soloRank.tier.toLowerCase()}
            className="flex-shrink-0 w-28 h-28 bg-main-bg rounded-md"
          />

          {/* 티어/랭크/점수/승률 */}
          <div className="space-y-1.5">
            <h5 className="text-xl font-bold tracking-widest">솔로랭크</h5>

            {/* 티어/랭크/점수 */}
            <div className="flex flex-col">
              <span className="text-sm">
                {soloRank.tier} {soloRank.rank}
              </span>
              <span className="text-xxs">{soloRank.leaguePoints} LP</span>
            </div>
            {/* 승률 */}
            <div className="flex flex-col">
              <div className="text-sm">
                <span>{soloRank.wins}승</span>
                <span> </span>
                <span>{soloRank.losses}패</span>
              </div>
              <div className="text-xxs">
                <span>
                  {(
                    (soloRank.wins / (soloRank.wins + soloRank.losses)) *
                    100
                  ).toFixed(2)}
                  %
                </span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
          {/* 티어 이미지 */}
          <img
            src={convertS3ImageURL("/images/emblem/provisional.png")}
            alt="unranked"
            className="flex-shrink-0 w-28 h-28 bg-main-bg rounded-md"
          />

          <div className="space-y-1.5">
            <h5 className="text-xl font-bold tracking-widest">언랭크</h5>

            <div className="flex flex-col">
              <span className="text-sm">UNRANKED</span>
            </div>
          </div>
        </section>
      )}

      {/* 자유랭크 */}
      {freeRank ? (
        <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
          {/* 티어 이미지 */}
          <img
            src={convertS3ImageURL(
              `/images/emblem/${freeRank.tier.toLowerCase()}.png`
            )}
            alt={`${freeRank.tier.toLowerCase()}`}
            className="flex-shrink-0 w-28 h-28 bg-main-bg rounded-md"
          />

          {/* 티어/랭크/점수/승률 */}
          <div className="space-y-1.5">
            <h5 className="text-xl font-bold tracking-widest">자유랭크</h5>

            {/* 티어/랭크/점수 */}
            <div className="flex flex-col">
              <span className="text-sm">
                {freeRank.tier} {freeRank.rank}
              </span>
              <span className="text-xxs">{freeRank.leaguePoints} LP</span>
            </div>
            {/* 승률 */}
            <div className="flex flex-col">
              <div className="text-sm">
                <span>{freeRank.wins}승</span>
                <span> </span>
                <span>{freeRank.losses}패</span>
              </div>
              <div className="text-xxs">
                <span>
                  {(
                    (freeRank.wins / (freeRank.wins + freeRank.losses)) *
                    100
                  ).toFixed(2)}
                  %
                </span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
          {/* 티어 이미지 */}
          <img
            src={convertS3ImageURL("/images/emblem/provisional.png")}
            alt="unranked"
            className="flex-shrink-0 w-28 h-28 bg-main-bg rounded-md"
          />

          <div className="space-y-1.5">
            <h5 className="text-xl font-bold tracking-widest">자유랭크</h5>

            <div className="flex flex-col">
              <span className="text-sm">UNRANKED</span>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default SummonerInfo;
