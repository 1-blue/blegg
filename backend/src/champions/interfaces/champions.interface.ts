import type {
  RiotChampionName,
  RiotImage,
  RiotInfo,
  RiotStats,
  RiotTag,
} from "src/types";

/** 2023/06/22 - 모든 챔피언들 데이터에서 가져온 특정 챔피언의 데이터 타입 - by 1-blue */
export interface RiotChampionData {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: RiotInfo;
  image: RiotImage;
  tags: RiotTag[];
  partype: string;
  stats: RiotStats;
  src: string;
}

/** 2023/06/22 - [모든 챔피언들 데이터](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json)에서 필요한 부분의 타입 - by 1-blue */
export type RiotChampions = {
  [key in RiotChampionName]: RiotChampionData;
};

interface ChampionData {
  id: string;
  name: string;
  title: string;
  src: string;
  info: RiotInfo;
  tags: RiotTag[];
  stats: RiotStats;
}
/** 2023/06/23 - 응답할 챔피언들 데이터 타입 - by 1-blue */
export type Champions = ChampionData[];
