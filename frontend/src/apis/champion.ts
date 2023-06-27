import axiosInstance from ".";

import type {
  ApiGetChampionHandler,
  ApiGetChampionResponse,
} from "@src/types/apis";

/** 2023/06/22 - 특정 챔피언 정보 요청 - by 1-blue */
export const apiGetChampion: ApiGetChampionHandler = async ({ name }) => {
  const { data } = await axiosInstance.get<ApiGetChampionResponse>(
    `/champion/${name}`
  );

  return data;
};
