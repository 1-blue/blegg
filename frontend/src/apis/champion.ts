import axiosInstance from ".";

import type {
  ApiGetAllChampionHandler,
  ApiGetAllChampionResponse,
  ApiGetDetailChampionHandler,
  ApiGetDetailChampionResponse,
} from "@src/types/apis";

/** 2023/06/19 - 모든 챔피언 정보 요청 - by 1-blue */
export const apiGetAllChampion: ApiGetAllChampionHandler = async () => {
  const { data } = await axiosInstance.get<ApiGetAllChampionResponse>(
    "/riot/champion"
  );

  return data;
};

/** 2023/06/22 - 특정 챔피언 정보 요청 - by 1-blue */
export const apiGetDetailChampion: ApiGetDetailChampionHandler = async ({
  name,
}) => {
  const { data } = await axiosInstance.get<ApiGetDetailChampionResponse>(
    `/riot/champion/${name}`
  );

  return data;
};
