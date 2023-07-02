/** 2023/06/29 - 응답할 스펠 데이터 타입 ( [Riot API 스펠](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/summoner.json) ) - by 1-blue */
export interface ApiResponseSpell {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  key: string;
}
