import type { RiotInfo, RiotStats } from ".";

export type SkillType = "P" | "Q" | "W" | "E" | "R";
interface Skill {
  type: SkillType;
  src: string;
  alt: string;
  title: string;
  description: string;
}
interface MySkin {
  id: string;
  src: string;
  name: string;
}
/** 2023/06/23 - 가공한 챔피언 데이터 타입 - by 1-blue */
export interface Champion {
  id: string;
  name: string;
  title: string;
  allytips: string[];
  enemytips: string[];
  stats: RiotStats;
  info: RiotInfo;
  skills: Skill[];
  skins: MySkin[];
}
