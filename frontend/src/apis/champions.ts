import axiosInstance from ".";

import type {
  ApiGetAllChampionsHandler,
  ApiGetAllChampionsResponse,
} from "@src/types/apis";

/** 2023/06/19 - 모든 챔피언 정보 요청 - by 1-blue */
export const apiGetAllChampions: ApiGetAllChampionsHandler = async () => {
  const { data } = await axiosInstance.get<ApiGetAllChampionsResponse>(
    "/champions"
  );

  return data;
};
