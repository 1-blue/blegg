import { useGetMatches } from "@src/query";

import SummonerRecord from "./SummonerRecord";
import Skeleton from "@src/components/Common/Skeleton";

import type { ApiGetMatchesResponse } from "@src/types/apis";

interface Props {
  /** 최근 전적을 검색할 유저 이름 */
  name: string;
  /** React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값 */
  initialDatas?: ApiGetMatchesResponse[];
}

/** 2023/07/03 - 소환사의 특정 게임 정보 컨테이너 컴포넌트 - by 1-blue */
const SummonerRecords: React.FC<Props> = ({ name, initialDatas }) => {
  const { matches, isLoading, isFetching, fetchNextPage } = useGetMatches(
    { name, start: 0, count: 10 },
    initialDatas
  );

  // loading
  if (isLoading) return <Skeleton.SummonerRecord />;
  // 404
  if (!matches) return <></>;

  return (
    <ul className="mt-6 -mx-4 space-y-4">
      {matches.pages.map((page) =>
        page.map((match) => (
          <SummonerRecord key={match.info.id} match={match} />
        ))
      )}

      {isFetching && <Skeleton.SummonerRecord />}

      <button
        className="w-full text-center space-x-6 p-4 bg-main-box-bg border border-main-line rounded-md transition-colors hover:bg-main-search-hover"
        onClick={() => fetchNextPage()}
        disabled={isLoading}
      >
        더 불러오기
      </button>
    </ul>
  );
};

export default SummonerRecords;
