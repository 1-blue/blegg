import type {
  RiotImage,
  RiotInfo,
  RiotPassive,
  RiotSkin,
  RiotSpell,
  RiotStats,
  RiotTag,
} from "src/types";

/** 2023/06/22 - [특정 챔피언 데이터](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json)에서 필요한 부분의 타입 - by 1-blue */
export interface RiotChampion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: RiotImage;
  skins: RiotSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: RiotTag[];
  partype: string;
  info: RiotInfo;
  stats: RiotStats;
  spells: RiotSpell[];
  passive: RiotPassive;
  // recommended: [];
}

type SkillType = "P" | "Q" | "W" | "E" | "R";
interface Skill {
  type: SkillType;
  src: string;
  alt: string;
  title: string;
  description: string;
}
interface Skin {
  id: string;
  src: string;
  name: string;
}
/** 2023/06/23 - 응답할 챔피언 데이터 타입 - by 1-blue */
export interface Champion
  extends Pick<
    RiotChampion,
    "id" | "name" | "title" | "allytips" | "enemytips" | "stats" | "info"
  > {
  skills: Skill[];
  skins: Skin[];
}
