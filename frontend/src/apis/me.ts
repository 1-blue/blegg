import axiosInstance from ".";

import type {
  ApiFindManyHatedPostOfMeHandler,
  ApiFindManyHatedPostOfMeResponse,
  ApiFindManyLikedPostOfMeHandler,
  ApiFindManyLikedPostOfMeResponse,
  ApiFindManyPostOfMeHandler,
  ApiFindManyPostOfMeResponse,
  ApiGetMeHandler,
  ApiGetMeResponse,
} from "@src/types/apis";

/** 2023/07/07 - 로그인한 유저 정보 요청 - by 1-blue */
export const apiGetMe: ApiGetMeHandler = async (body) => {
  const { data } = await axiosInstance.get<ApiGetMeResponse>("/me", body);

  return data;
};
/** 2023/07/18 - 로그인한 유저가 작성한 게시글들 요청 핸들러 타입 - by 1-blue */
export const apiFindManyPostOfMe: ApiFindManyPostOfMeHandler = async (body) => {
  const { data } = await axiosInstance.get<ApiFindManyPostOfMeResponse>(
    "/me/post",
    { params: body }
  );

  return data;
};

/** 2023/07/18 - 로그인한 유저가 좋아요한 게시글들 요청 핸들러 타입 - by 1-blue */
export const apiFindManyLikedPostOfMe: ApiFindManyLikedPostOfMeHandler = async (
  body
) => {
  const { data } = await axiosInstance.get<ApiFindManyLikedPostOfMeResponse>(
    "/me/post/liked",
    { params: body }
  );

  return data;
};
/** 2023/07/18 - 로그인한 유저가 싫어요한 게시글들 요청 핸들러 타입 - by 1-blue */
export const apiFindManyHatedPostOfMe: ApiFindManyHatedPostOfMeHandler = async (
  body
) => {
  const { data } = await axiosInstance.get<ApiFindManyHatedPostOfMeResponse>(
    "/me/post/hated",
    { params: body }
  );

  return data;
};
