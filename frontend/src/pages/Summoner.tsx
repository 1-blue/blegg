import { useSearchParams } from "react-router-dom";

import FormToolkit from "@src/components/FormToolkit";
import SummonerInfo from "@src/components/Riot/Summoner/SummonerInfo";
import SummonerRecords from "@src/components/Riot/Summoner/SummonerRecords";

/** 2023/06/19 - 소환사 랭킹 페이지 컴포넌트 - by 1-blue */
const Summoner: React.FC = () => {
  /** 2023/07/02 - 검색어 - by 1-blue */
  const q = useSearchParams()[0].get("q");

  return (
    <>
      {/* 검색창 */}
      <FormToolkit.SearchInput
        key="search"
        baseURL="/summoner"
        wrapperClassName="px-0 -mx-4"
      />

      {/* 아이콘 / 이름 / 레벨 */}
      {/* 티어 / 포인트 / 승률 */}
      {q && <SummonerInfo name={q} />}

      {/* 최근 전적들 */}
      {q && <SummonerRecords name={q} />}

      {!q && (
        <section className="flex flex-col items-center mt-6 -mx-4 p-12 bg-main-box-bg border border-main-line rounded-md font-sub space-y-4">
          <h6 className="font-black text-2xl xs:text-3xl sm:text-4xl animate-bounce mt-4">
            소환사를 검색해보세요!
          </h6>
        </section>
      )}
    </>
  );
};

export default Summoner;
