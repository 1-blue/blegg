import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetItem } from "@src/apis";

import type { ApiGetItemRequest, ApiGetItemResponse } from "@src/types/apis";

interface Props extends ApiGetItemRequest {}

/** 2023/07/02 - 특정 아이템 정보 요청 훅 - by 1-blue */
export const useGetItem = ({ id }: Props, initialData?: ApiGetItemResponse) => {
  const { data, isLoading, isError } = useQuery<ApiGetItemResponse>(
    [QUERY_KEYS.ITEM, id],
    () => apiGetItem({ id }),
    { initialData }
  );

  return { item: data, isLoading, isError };
};
