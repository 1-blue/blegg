import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetSummoner } from "@src/apis";

import type {
  ApiGetSummonerRequest,
  ApiGetSummonerResponse,
} from "@src/types/apis";

interface Props extends ApiGetSummonerRequest {}

/** 2023/06/22 - 특정 챔피언 정보 요청 훅 - by 1-blue */
export const useGetSummoner = (
  { name }: Props,
  initialData?: ApiGetSummonerResponse
) => {
  const { data, isLoading, isError } = useQuery<ApiGetSummonerResponse>(
    [QUERY_KEYS.SUMMONER, name],
    () => apiGetSummoner({ name }),
    { initialData }
  );

  return { summoner: data, isLoading, isError };
};
