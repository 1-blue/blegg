import { useSearchParams } from "react-router-dom";

import SearchInput from "@src/components/Form/SearchInput";
import SummonerInfo from "@src/components/Summoner/SummonerInfo";
import SummonerRecords from "@src/components/Summoner/SummonerRecords/SummonerRecords";

/** 2023/06/19 - 소환사 랭킹 페이지 컴포넌트 - by 1-blue */
const Summoner = () => {
  /** 2023/07/02 - 검색어 - by 1-blue */
  const q = useSearchParams()[0].get("q");

  return (
    <>
      {/* 검색창 */}
      <SearchInput
        key="search"
        baseURL="/summoner"
        wrapperClassName="px-0 -mx-4"
      />

      {/* 아이콘 / 이름 / 레벨 */}
      {/* 티어 / 포인트 / 승률 */}
      {q && <SummonerInfo name={q} />}

      {/* 최근 전적 */}
      {q && <SummonerRecords name={q} />}
    </>
  );
};

export default Summoner;
