import { RiotImage } from "src/types";

/** 2023/07/03 - [Riot API 스펠](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/summoner.json)에서 얻는 데이터 타입 - by 1-blue */
export interface RiotSpell {
  type: string;
  version: string;
  data: {
    [name in RiotSpellNames]: RiotSpellData;
  };
}

type RiotSpellNames =
  | "SummonerBarrier"
  | "SummonerBoost"
  | "SummonerDot"
  | "SummonerExhaust"
  | "SummonerFlash"
  | "SummonerHaste"
  | "SummonerHeal"
  | "SummonerMana"
  | "SummonerPoroRecall"
  | "SummonerPoroThrow"
  | "SummonerSmite"
  | "SummonerSnowURFSnowball_Mark"
  | "SummonerSnowball"
  | "SummonerTeleport"
  | "Summoner_UltBookPlaceholder"
  | "Summoner_UltBookSmitePlaceholder";
interface RiotSpellData {
  /** 스펠 영문이름 */
  id: string;
  /** 스펠 한글이름 */
  name: string;
  /** 스펠 설명 */
  description: string;
  /** 스펠 설명 */
  tooltip: string;
  /** ? */
  maxrank: 1;
  /** 스펠 쿨타임 */
  cooldown: number[];
  /** 스펠 쿨타임 */
  cooldownBurn: string;
  /** 스펠 소모값 */
  cost: [0];
  /** 스펠 소모값 */
  costBurn: "0";
  /** ? */
  // datavalues: {};
  /** 효과 수치 */
  effect: (null | number[])[];
  /** 효과 수치 */
  effectBurn: (null | string)[];
  /** ? */
  vars: [];
  /** 식별자 */
  key: string;
  /** 스펠 사용 가능 레벨 */
  summonerLevel: number;
  /** 스펠 사용 가능 모드들 */
  modes: string[];
  /** 소모값 */
  costType: string;
  /** ? */
  maxammo: string;
  /** 사거리 */
  range: number[];
  /** 사거리 */
  rangeBurn: string;
  /** 이미지 */
  image: RiotImage;
  /** 소모값 */
  resource: string;
}
