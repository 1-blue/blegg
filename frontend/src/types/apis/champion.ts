import { RiotChampionName, RiotImage } from "..";

/** 2023/06/22 - 특정 챔피언 상세 정보 요청 타입 - by 1-blue */
export interface ApiGetDetailChampionRequest {
  name: RiotChampionName;
}
/** 2023/06/22 - 특정 챔피언 상세 정보 응답 타입 - by 1-blue */
export interface ApiGetDetailChampionResponse {
  id: string;
  name: string;
  title: string;
  allytips: string[];
  enemytips: string[];
  info: RiotChampionInfo;
  stats: RiotChampionStats;
  skills: Skill[];
  skins: Skin[];
}
/** 2023/06/22 - 특정 챔피언 상세 정보 핸들러 타입 - by 1-blue */
export interface ApiGetDetailChampionHandler {
  (body: ApiGetDetailChampionRequest): Promise<ApiGetDetailChampionResponse>;
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

/** 2023/06/19 - 모든 챔피언들 정보 응답 타입 - by 1-blue */
export type ApiGetAllChampionResponse = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: RiotImage;
  skins: RiotChampionSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: RiotChampionTag[];
  partype: string;
  info: RiotChampionInfo;
  stats: RiotChampionStats;
  spells: RiotChampionSpell[];
  passive: RiotChampionPassive;
}[];
/** 2023/06/19 - 모든 챔피언들 정보 핸들러 타입 - by 1-blue */
export interface ApiGetAllChampionHandler {
  (): Promise<ApiGetAllChampionResponse>;
}

/** 2023/07/02 - [특정 챔피언 상세 정보 API의 skin](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) by 1-blue */
export interface RiotChampionSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}
/** 2023/07/02 - [특정 챔피언 상세 정보 API의 tags](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) - by 1-blue */
export type RiotChampionTag =
  | "Fighter"
  | "Tank"
  | "Mage"
  | "Assassin"
  | "Marksman"
  | "Support";
/** 2023/07/02 - [특정 챔피언 상세 정보 API의 info](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) - by 1-blue */
export interface RiotChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
/** 2023/07/02 - [특정 챔피언 상세 정보 API의 stats](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) - by 1-blue */
export interface RiotChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}
/** 2023/07/02 - [특정 챔피언 상세 정보 API의 spell](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) - by 1-blue */
export interface RiotChampionSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string;
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  effect: (number | null)[][];
  effectBurn: (number | null)[];
  // vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: RiotImage;
  resource: string;
}
/** 2023/07/02 - [특정 챔피언 상세 정보 API의 passive](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) - by 1-blue */
export interface RiotChampionPassive {
  name: string;
  description: string;
  image: RiotImage;
}
