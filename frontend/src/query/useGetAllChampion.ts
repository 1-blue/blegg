import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetAllChampion } from "@src/apis";

import type { ApiGetAllChampionResponse } from "@src/types/apis";

/** 2023/06/19 - 모든 챔피언 정보 요청 훅 - by 1-blue */
export const useGetAllChampion = () => {
  const { data, isLoading, isError } = useQuery<ApiGetAllChampionResponse>(
    [QUERY_KEYS.ALL_CHAMPION],
    apiGetAllChampion
  );

  return { champions: data, isLoading, isError };
};
