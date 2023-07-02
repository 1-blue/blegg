import type { RiotLeagueEntry } from "..";

/** 2023/07/01 - 특정 소환사 정보 요청 타입 - by 1-blue */
export interface ApiGetSummonerRequest {
  name: string;
}
/** 2023/07/01 - 특정 소환사 정보 응답 타입 - by 1-blue */
export interface ApiGetSummonerResponse {
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
}
/** 2023/07/01 - 특정 소환사 정보 핸들러 타입 - by 1-blue */
export interface ApiGetSummonerHandler {
  (body: ApiGetSummonerRequest): Promise<ApiGetSummonerResponse>;
}
