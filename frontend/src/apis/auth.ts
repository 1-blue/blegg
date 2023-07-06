import axiosInstance from ".";

import type { ApiSignUpHandler, ApiSignUpResponse } from "@src/types/apis";

/** 2023/07/05 - 회원가입 요청 - by 1-blue */
export const apiSignUp: ApiSignUpHandler = async (body) => {
  const { data } = await axiosInstance.post<ApiSignUpResponse>("/auth", body);

  return data;
};
