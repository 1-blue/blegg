import type { RiotAccount } from "src/riot/account/models/account.model";
import type { RiotLeagueEntry } from "../model/summoner.model";

/** 2023/06/28 - 소환사 정보 수신 타입 - by 1-blue */
export type ApiResponseSummoner = {
  /** 소환사 정보 */
  summoner: Pick<RiotAccount, "name" | "summonerLevel"> & {
    profileIconSrc: string;
  };
  /** 솔로랭크 */
  RANKED_SOLO_5x5?: Pick<
    RiotLeagueEntry,
    "tier" | "rank" | "summonerName" | "leaguePoints" | "wins" | "losses"
  >;
  /** 자유랭크 */
  RANKED_FLEX_SR?: Pick<
    RiotLeagueEntry,
    "tier" | "rank" | "summonerName" | "leaguePoints" | "wins" | "losses"
  >;
};
