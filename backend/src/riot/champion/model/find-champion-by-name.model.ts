import type { RiotImage } from "src/types";
import type {
  RiotChampionInfo,
  RiotChampionPassive,
  RiotChampionSkin,
  RiotChampionSpell,
  RiotChampionStats,
  RiotChampionTag,
} from "./champion";

/** 2023/06/22 - [특정 챔피언 데이터](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json)에서 필요한 부분의 타입 - by 1-blue */
export interface RiotChampionDetail {
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
}
