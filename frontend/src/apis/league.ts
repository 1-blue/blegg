import axiosInstance from ".";

import type {
  ApiGetLeagueHandler,
  ApiGetLeagueResponse,
} from "@src/types/apis";

/** 2023/07/24 - 상위 티어 리그 정보 요청 - by 1-blue */
export const apiGetLeague: ApiGetLeagueHandler = async ({ league }) => {
  const { data } = await axiosInstance.get<ApiGetLeagueResponse>(
    `/riot/league/${league}`
  );

  return data;
};
