import axiosInstance from ".";

import type { ApiGetMeHandler, ApiGetMeResponse } from "@src/types/apis";

/** 2023/07/07 - 로그인한 유저 정보 요청 - by 1-blue */
export const apiGetMe: ApiGetMeHandler = async (body) => {
  const { data } = await axiosInstance.get<ApiGetMeResponse>("/user/me", body);

  return data;
};
