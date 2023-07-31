/**
 * 2023/07/24 - 상위 티어 리그 정보 - by 1-blue
 * 1. [챌린저](https://developer.riotgames.com/apis#league-v4/GET_getChallengerLeague)
 * 2. [그랜드 마스터](https://developer.riotgames.com/apis#league-v4/GET_getGrandmasterLeague)
 * 3. [마스터](https://developer.riotgames.com/apis#league-v4/GET_getMasterLeague)
 */
export interface RiotLeague {
  tier: string;
  leagueId: string;
  queue: string;
  name: string;
  entries: RiotEntry[];
}
export interface RiotEntry {
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  rank: string;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}
export type RiotLeagueType = "challenger" | "grandmaster" | "master";
