import axiosInstance from ".";

import type { ApiGetItemHandler, ApiGetItemResponse } from "@src/types/apis";

/** 2023/07/02 - 특정 아이템 정보 요청 - by 1-blue */
export const apiGetItem: ApiGetItemHandler = async ({ id }) => {
  const { data } = await axiosInstance.get<ApiGetItemResponse>(
    `/riot/item/${id}`
  );

  return data;
};
