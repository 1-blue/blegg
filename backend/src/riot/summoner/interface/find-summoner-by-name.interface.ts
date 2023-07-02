import type { RiotLeagueEntry } from "../model/summoner.model";

/** 2023/06/28 - 소환사 정보 수신 타입 - by 1-blue */
export type ApiResponseSummoner = {
  /** 소환사 정보 */
  info: {
    name: string;
    level: number;
    profileIconSrc: string;
  };
  /** 솔로랭크 */
  soloRank?: Pick<
    RiotLeagueEntry,
    "tier" | "rank" | "leaguePoints" | "wins" | "losses"
  >;
  /** 자유랭크 */
  freeRank?: Pick<
    RiotLeagueEntry,
    "tier" | "rank" | "leaguePoints" | "wins" | "losses"
  >;
};
