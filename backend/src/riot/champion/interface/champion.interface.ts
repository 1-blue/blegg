import type { RiotChampionDetail } from "../model/find-champion-by-name.model";

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
/** 2023/06/23 - 응답할 챔피언 상세 데이터 타입 [참고](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion/Poppy.json) - by 1-blue */
export interface ApiResponseDetailChampion
  extends Pick<
    RiotChampionDetail,
    "id" | "name" | "title" | "allytips" | "enemytips" | "stats" | "info"
  > {
  skills: Skill[];
  skins: Skin[];
}
