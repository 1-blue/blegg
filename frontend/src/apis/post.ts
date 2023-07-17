import axiosInstance from ".";

import type {
  ApiAddViewCountOfPostHandler,
  ApiAddViewCountOfPostResponse,
  ApiCreateCommentHandler,
  ApiCreateCommentResponse,
  ApiCreatePostHandler,
  ApiCreatePostResponse,
  ApiCreateRatingOfPostHandler,
  ApiCreateRatingOfPostResponse,
  ApiDeleteCommentHandler,
  ApiDeleteCommentResponse,
  ApiDeletePostHandler,
  ApiDeletePostResponse,
  ApiDeleteRatingOfPostHandler,
  ApiDeleteRatingOfPostResponse,
  ApiFindManyCommentHandler,
  ApiFindManyCommentResponse,
  ApiFindManyPostHandler,
  ApiFindManyPostResponse,
  ApiFindOnePostHandler,
  ApiFindOnePostResponse,
  ApiUpdateCommentHandler,
  ApiUpdateCommentResponse,
  ApiUpdatePostHandler,
  ApiUpdatePostResponse,
} from "@src/types/apis";

// ==================== 게시글 ====================

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
export const apiUpdatePost: ApiUpdatePostHandler = async (idx, body) => {
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

// ==================== 게시글 평가 ====================

/** 2023/07/13 - 게시글 좋아요 추가 요청 - by 1-blue */
export const apiCreateRatingOfPost: ApiCreateRatingOfPostHandler = async ({
  idx,
}) => {
  const { data } = await axiosInstance.post<ApiCreateRatingOfPostResponse>(
    `/post/${idx}/rating`
  );

  return data;
};

/** 2023/07/13 - 게시글 좋아요 제거 요청 - by 1-blue */
export const apiDeleteRatingOfPost: ApiDeleteRatingOfPostHandler = async ({
  idx,
}) => {
  const { data } = await axiosInstance.delete<ApiDeleteRatingOfPostResponse>(
    `/post/${idx}/rating`
  );

  return data;
};

// ==================== 게시글 조회수 ====================

/** 2023/07/13 - 게시글 조회수 증가 요청 - by 1-blue */
export const apiAddViewCountOfPost: ApiAddViewCountOfPostHandler = async ({
  idx,
}) => {
  const { data } = await axiosInstance.post<ApiAddViewCountOfPostResponse>(
    `/post/${idx}/view`
  );

  return data;
};

// ==================== 게시글의 댓글 ====================

/** 2023/07/16 - 댓글 생성 요청 - by 1-blue */
export const apiCreateComment: ApiCreateCommentHandler = async (
  postIdx,
  body
) => {
  const { data } = await axiosInstance.post<ApiCreateCommentResponse>(
    `/post/${postIdx}/comment`,
    body
  );

  return data;
};

/** 2023/07/16 - 여러 댓글들 요청 - by 1-blue */
export const apiFindManyComment: ApiFindManyCommentHandler = async (
  postIdx,
  body
) => {
  const { data } = await axiosInstance.get<ApiFindManyCommentResponse>(
    `/post/${postIdx}/comment`,
    { params: body }
  );

  return data;
};

/** 2023/07/16 - 댓글 수정 요청 타입 - by 1-blue */
export const apiUpdateComment: ApiUpdateCommentHandler = async (
  postIdx,
  commentIdx,
  body
) => {
  const { data } = await axiosInstance.patch<ApiUpdateCommentResponse>(
    `/post/${postIdx}/comment/${commentIdx}`,
    body
  );

  return data;
};

/** 2023/07/16 - 댓글 제거 요청 - by 1-blue */
export const apiDeleteComment: ApiDeleteCommentHandler = async (
  postIdx,
  commentIdx
) => {
  const { data } = await axiosInstance.delete<ApiDeleteCommentResponse>(
    `/post/${postIdx}/comment/${commentIdx}`
  );

  return data;
};
