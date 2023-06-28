/**
 * 계정 정보 얻기
 * 1. [accountId로 계정 정보 얻기](https://developer.riotgames.com/apis#summoner-v4/GET_getByAccountId)
 * 2. [소환사명으로 계정 정보 얻기](https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName)
 * 3. [puuid로 계정 정보 얻기](https://developer.riotgames.com/apis#summoner-v4/GET_getByPUUID)
 */
export interface RiotSummoner {
  /** 암호화된 소환사 ID */
  id: string;
  /** 암호화된 계정 ID */
  accountId: string;
  /** 암호화된 PUUID */
  puuid: string;
  /** 소환사 이름 */
  name: string;
  /** 소환사 아이콘 ID */
  profileIconId: number;
  /** 이름/레벨/아이콘이 마지막으로 변경된 시간 */
  revisionDate: number;
  /** 소환사 레벨 */
  summonerLevel: number;
}

/**
 * [소환사id로 소환사 정보 얻기](https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner)
 */
export interface RiotLeagueEntry {
  leagueId: string;
  /** "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" */
  queueType: RiotQueueType;
  /** "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON" */
  tier: RiotTier;
  /** "I" | "IV" */
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

type RiotQueueType = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR";
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
type RiotRank = "I" | "IV";

/** 소환사 정보 수신 타입 */
export type ApiResponseSummoner = {
  /** 소환사 정보 */
  summoner: Pick<RiotSummoner, "name" | "summonerLevel"> & {
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
