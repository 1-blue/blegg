import type { RiotInfo, RiotStats, RiotTag } from "src/types";

/** 2023/06/23 - 응답할 챔피언 데이터 타입 - by 1-blue */
interface Champion {
  id: string;
  name: string;
  title: string;
  src: string;
  info: RiotInfo;
  tags: RiotTag[];
  stats: RiotStats;
}
/** 2023/06/23 - 응답할 챔피언들 데이터 타입 - by 1-blue */
export type ApiResponseChampions = Champion[];
