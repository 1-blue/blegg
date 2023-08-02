/** 2023/07/24 - 상위 티어 리그 정보 - by 1-blue */
export type ApiResponseLeague = {
  /** 티어 */
  tier: string;
  /** 소환사 이름 */
  summonerName: string;
  /** 랭크 */
  rank: string;
  /** 리그 점수 */
  leaguePoints: number;
  /** 승리 횟수 */
  wins: number;
  /** 패배 횟수 */
  losses: number;
}[];
