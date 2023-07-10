import axiosInstance from ".";

import type {
  ApiSignInHandler,
  ApiSignInResponse,
  ApiSignOutHandler,
  ApiSignOutResponse,
  ApiSignUpHandler,
  ApiSignUpResponse,
} from "@src/types/apis";

/** 2023/07/05 - 회원가입 요청 - by 1-blue */
export const apiSignUp: ApiSignUpHandler = async (body) => {
  const { data } = await axiosInstance.post<ApiSignUpResponse>(
    "/auth/signup",
    body
  );

  return data;
};

/** 2023/07/07 - 로그인 요청 - by 1-blue */
export const apiSignIn: ApiSignInHandler = async (body) => {
  const { data } = await axiosInstance.post<ApiSignInResponse>(
    "/auth/signin",
    body
  );

  return data;
};

/** 2023/07/07 - 로그아웃 요청 - by 1-blue */
export const apiSignOut: ApiSignOutHandler = async (body) => {
  const { data } = await axiosInstance.post<ApiSignOutResponse>(
    "/auth/signout",
    body
  );

  return data;
};
