import axiosInstance from ".";

import type {
  ApiGetMatchesHandler,
  ApiGetMatchesResponse,
} from "@src/types/apis";

/** 2023/07/01 - 특정 소환사의 전적들 요청 - by 1-blue */
export const apiGetMatches: ApiGetMatchesHandler = async ({
  name,
  start,
  count,
}) => {
  const { data } = await axiosInstance.get<ApiGetMatchesResponse>(
    `/riot/match/${name}`,
    { params: { start, count } }
  );

  return data;
};
