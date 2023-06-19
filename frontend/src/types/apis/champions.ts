import type { Champions } from "@src/types";

/** 2023/06/19 - 모든 챔피언들 정보 응답 타입 - by 1-blue */
export interface ApiGetAllChampionsResponse extends Champions {}
/** 2023/06/19 - 모든 챔피언들 정보 핸들러 타입 - by 1-blue */
export interface ApiGetAllChampionsHandler {
  (): Promise<ApiGetAllChampionsResponse>;
}
