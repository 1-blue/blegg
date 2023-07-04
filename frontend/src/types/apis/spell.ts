/** 2023/07/02 - 특정 스펠 정보 요청 타입 - by 1-blue */
export interface ApiGetSpellRequest {
  key: number;
}
/** 2023/07/02 - 특정 스펠 정보 응답 타입 ( [Riot API 스펠](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/summoner.json) ) - by 1-blue */
export interface ApiGetSpellResponse {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  key: string;
}
/** 2023/07/02 - 특정 스펠 정보 핸들러 타입 - by 1-blue */
export interface ApiGetSpellHandler {
  (body: ApiGetSpellRequest): Promise<ApiGetSpellResponse>;
}
