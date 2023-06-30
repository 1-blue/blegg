export const VERSION = "13.12.1";
export const LANGUAGE = "ko_KR";

/** 2023/06/20 - (챔피언) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToChampionSquareImageURL = (name: string) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${name}.png`;

/** 2023/06/22 - (챔피언) 직사각형 이미지 url로 변경 - by 1-blue */
export const convertToRectangleImageURL = (name: string) =>
  `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}.jpg`;

/** 2023/06/22 - (스킬) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToSkillSquareImageURL = (name: string) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${name}`;

/** 2023/06/22 - (패시브) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToPassiveSquareImageURL = (name: string) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/passive/${name}`;

export const SkillTypeCoords = ["Q", "W", "E", "R"] as const;

/** 2023/06/28 - (아이콘) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToIconImageURL = (iconId: number) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/profileicon/${iconId}.png`;

/** 2023/06/30 - (아이템) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToItemImageURL = (itemId: string) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/item/${itemId}.png`;

/** 2023/06/30 - 아이템 스텟 번역 테이블 - by 1-blue */
export const statsCoords = {
  FlatHPPoolMod: "체력",
  FlatMPPoolMod: "마나",
  // FlatHPRegenMod: "체력 재생량",
  FlatArmorMod: "방어력",
  FlatPhysicalDamageMod: "공격력",
  FlatMagicDamageMod: "주문력",
  PercentAttackSpeedMod: "공격 속도",
  FlatCritChanceMod: "치명타 확률",
  FlatSpellBlockMod: "마법 저항력",
  PercentLifeStealMod: "생명력 흡수",
  FlatMovementSpeedMod: "이동 속도",
};

/** 2023/06/30 - (스펠) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToSpellImageURL = (name: string) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${name}.png`;
