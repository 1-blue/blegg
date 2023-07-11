import axiosInstance from ".";

import type {
  ApiCreatePostHandler,
  ApiCreatePostResponse,
  ApiDeletePostHandler,
  ApiDeletePostResponse,
  ApiFindManyPostHandler,
  ApiFindManyPostResponse,
  ApiFindOnePostHandler,
  ApiFindOnePostResponse,
  ApiUpdatePostHandler,
  ApiUpdatePostResponse,
} from "@src/types/apis";

/** 2023/07/11 - 게시글 생성 요청 - by 1-blue */
export const apiCreatePost: ApiCreatePostHandler = async (body) => {
  const { data } = await axiosInstance.post<ApiCreatePostResponse>(
    "/post",
    body
  );

  return data;
};

/** 2023/07/11 - 단일 게시글 정보 요청 - by 1-blue */
export const apiFindOnePost: ApiFindOnePostHandler = async ({ idx }) => {
  const { data } = await axiosInstance.get<ApiFindOnePostResponse>(
    `/post/${idx}`
  );

  return data;
};

/** 2023/07/11 - 여러 게시글들 요청 - by 1-blue */
export const apiFindManyPost: ApiFindManyPostHandler = async (body) => {
  const { data } = await axiosInstance.get<ApiFindManyPostResponse>("/post", {
    params: body,
  });

  return data;
};

/** 2023/07/11 - 게시글 수정 요청 타입 - by 1-blue */
export const apiUpdatePost: ApiUpdatePostHandler = async (body, idx) => {
  const { data } = await axiosInstance.patch<ApiUpdatePostResponse>(
    `/post/${idx}`,
    body
  );

  return data;
};

/** 2023/07/11 - 게시글 제거 요청 - by 1-blue */
export const apiDeletePost: ApiDeletePostHandler = async ({ idx }) => {
  const { data } = await axiosInstance.delete<ApiDeletePostResponse>(
    `/post/${idx}`
  );

  return data;
};
