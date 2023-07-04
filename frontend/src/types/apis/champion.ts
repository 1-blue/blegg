import type {
  RiotChampionInfo,
  RiotChampionName,
  RiotChampionStats,
  RiotChampionTag,
  RiotChmapionSkillType,
} from "..";

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

interface Skill {
  type: RiotChmapionSkillType;
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
  name: string;
  title: string;
  src: string;
  info: RiotChampionInfo;
  tags: RiotChampionTag[];
  stats: RiotChampionStats;
}[];
/** 2023/06/19 - 모든 챔피언들 정보 핸들러 타입 - by 1-blue */
export interface ApiGetAllChampionHandler {
  (): Promise<ApiGetAllChampionResponse>;
}
