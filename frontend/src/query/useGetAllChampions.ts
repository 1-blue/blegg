import { useQuery } from "@tanstack/react-query";

import type { ApiGetAllChampionsResponse } from "@src/types/apis";
import QUERY_KEYS from ".";
import { apiGetAllChampions } from "@src/apis";

/** 2023/06/19 - 모든 챔피언 정보 요청 훅 - by 1-blue */
export const useGetAllChampions = () => {
  const { data, isLoading, isError } = useQuery<ApiGetAllChampionsResponse>(
    [QUERY_KEYS.ALL_CHAMPION],
    apiGetAllChampions
  );

  return { champions: data, isLoading, isError };
};
