/** 2023/06/28 - [소환사id로 소환사 정보 얻기](https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner) by 1-blue */
export interface RiotLeagueEntry {
  leagueId: string;
  /** "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" */
  queueType: RiotQueueType;
  /** "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON" */
  tier: RiotTier;
  /** "I" | "II" | "III" | "IV" */
  rank: RiotRank;
  /** 암호화된 소환사 ID */
  summonerId: string;
  /** 소환사 이름 */
  summonerName: string;
  /** 리그 점수 */
  leaguePoints: number;
  /** 승리 횟수 */
  wins: number;
  /** 패배 횟수 */
  losses: number;
  /** 비활성화 여부 */
  inactive: boolean;
  /** 이전 시즌 기록 있는지 여부 ? */
  veteran: boolean;
  /** 이전 시즌 기록 있는지 여부 ? */
  freshBlood: boolean;
  /** 연승 연패 여부 ? */
  hotStreak: boolean;
}

/** 2023/06/28 - 게임 타입 - by 1-blue */
type RiotQueueType = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR";
/** 2023/06/28 - 소환사 티어 - by 1-blue */
type RiotTier =
  | "CHALLENGER"
  | "GRANDMASTER"
  | "MASTER"
  | "DIAMOND"
  | "PLATINUM"
  | "GOLD"
  | "SILVER"
  | "BRONZE"
  | "IRON";
/** 2023/06/28 - 소환사 랭크 - by 1-blue */
type RiotRank = "I" | "II" | "III" | "IV";
