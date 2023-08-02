/**
 * 2023/06/28 - 계정 정보 얻기 - by 1-blue
 * 1. [accountId로 계정 정보 얻기](https://developer.riotgames.com/apis#summoner-v4/GET_getByAccountId)
 * 2. [소환사명으로 계정 정보 얻기](https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName)
 * 3. [puuid로 계정 정보 얻기](https://developer.riotgames.com/apis#summoner-v4/GET_getByPUUID)
 */
export interface RiotAccount {
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
