import { useGetMatches } from "@src/query";

import Inner from "./Inner";
import Skeleton from "@src/components/Common/Skeleton";

interface Props {
  name: string;
}

/** 2023/07/03 - 소환사의 특정 게임 정보 컨테이너 컴포넌트 - by 1-blue */
const SummonerRecord: React.FC<Props> = ({ name }) => {
  const { matches, isLoading, isFetching, fetchNextPage } = useGetMatches({
    name,
    start: 0,
    count: 10,
  });

  if (isLoading) return <Skeleton.SummonerRecord />;
  // TODO:
  if (!matches) return <></>;

  return (
    <ul className="mt-6 -mx-4 space-y-4">
      {matches.pages.map((page) =>
        page.map((match) => <Inner key={match.info.id} match={match} />)
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

export default SummonerRecord;
