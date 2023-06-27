import type { Champion, RiotChampionName } from "@src/types";

/** 2023/06/22 - 특정 챔피언들 정보 요청 타입 - by 1-blue */
export interface ApiGetChampionRequest {
  name: RiotChampionName;
}
/** 2023/06/22 - 특정 챔피언들 정보 응답 타입 - by 1-blue */
export interface ApiGetChampionResponse extends Champion {}
/** 2023/06/22 - 특정 챔피언들 정보 핸들러 타입 - by 1-blue */
export interface ApiGetChampionHandler {
  (body: ApiGetChampionRequest): Promise<ApiGetChampionResponse>;
}
