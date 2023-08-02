import axiosInstance from ".";

import type {
  ApiGetPresignedURLHandler,
  ApiGetPresignedURLResponse,
} from "@src/types/apis";

/** 2023/07/14 - presignedURL 요청 ( 단일 이미지 업로드 ) - by 1-blue */
export const apiGetPresignedURL: ApiGetPresignedURLHandler = async (body) => {
  const { data } = await axiosInstance.post<ApiGetPresignedURLResponse>(
    "/presignedurl",
    body
  );

  return data;
};
