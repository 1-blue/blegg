import { Link } from "react-router-dom";

import Animate from "@src/components/Animate";

import type { ApiGetLeagueResponse } from "@src/types/apis";

interface Props {
  /** 특정 리그의 특정 유저에 대한 데이터 */
  league: ApiGetLeagueResponse[0];
  /** 유저 전체 랭킹 */
  ranking: number;
}

/** 2023/07/24 - 챌린저/그랜드마스터/마스터 티어 유저 뱃지 컴포넌트 - by 1-blue */
const LeagueBedge: React.FC<Props> = ({ league, ranking }) => {
  return (
    <Link
      to={`/summoner?q=${league.summonerName}`}
      className="relative my-box min-w-[150px] flex flex-col items-center space-y-2 p-4 bg-main-950 rounded-lg border-2 border-main-400 transition-all hover:scale-105 hover:border-main-500"
    >
      <span className="absolute top-2 left-3 text-sm">{ranking + 1}등</span>
      <img
        src={`/images/emblem/${league.tier.toLowerCase()}.png`}
        className="w-20 h-20 rounded-full border-4 border-main-600 pointer-events-none"
      />
      <span>{league.summonerName}</span>
      <span className="text-sm">{league.leaguePoints} LP</span>
      <div className="text-xs">
        <span>{league.wins}승</span>
        <span> / </span>
        <span>{league.losses}패</span>
        <span> </span>
        <span>
          ( {((league.wins / (league.wins + league.losses)) * 100).toFixed(2)}%
          )
        </span>
      </div>

      <Animate.ProgressBar
        percent={(league.wins / (league.wins + league.losses)) * 100}
      />
    </Link>
  );
};

export default LeagueBedge;
