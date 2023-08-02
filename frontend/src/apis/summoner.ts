import axiosInstance from ".";

import type {
  ApiGetSummonerHandler,
  ApiGetSummonerResponse,
} from "@src/types/apis";

/** 2023/07/01 - 특정 소환사 정보 요청 - by 1-blue */
export const apiGetSummoner: ApiGetSummonerHandler = async ({ name }) => {
  const { data } = await axiosInstance.get<ApiGetSummonerResponse>(
    `/riot/summoner/${name}`
  );

  return data;
};
