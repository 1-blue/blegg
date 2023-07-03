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

/** 2023/06/30 - (스펠) 정사각형 이미지 url로 변경 - by 1-blue */
export const convertToSpellImageURL = (name: string) =>
  `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${name}.png`;

/** 2023/07/01 - [ququeId를 기준으로 게임모드를 판단하는 테이블](https://static.developer.riotgames.com/docs/lol/queues.json) - by 1-blue */
export const queueIdCoords = {
  420: "솔로랭크",
  430: "일반게임",
  440: "자유랭크",
  450: "칼바람나락",
};
