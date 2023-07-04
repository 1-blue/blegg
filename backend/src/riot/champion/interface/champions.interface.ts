import type {
  RiotChampionInfo,
  RiotChampionStats,
  RiotChampionTag,
} from "../model/champion";

/** 2023/06/23 - 응답할 챔피언 데이터 타입 [참고](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/champion.json) - by 1-blue */
export interface ApiResponseChampion {
  id: string;
  name: string;
  title: string;
  src: string;
  info: RiotChampionInfo;
  tags: RiotChampionTag[];
  stats: RiotChampionStats;
}
