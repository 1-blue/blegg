import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetLeague } from "@src/apis";

import type {
  ApiGetLeagueRequest,
  ApiGetLeagueResponse,
} from "@src/types/apis";

interface Props extends ApiGetLeagueRequest {}

/** 2023/07/24 - 상위 리그 정보 요청 훅 - by 1-blue */
export const useGetLeague = (
  { league }: Props,
  initialData?: ApiGetLeagueResponse
) => {
  const { data, isLoading, isError } = useQuery<ApiGetLeagueResponse>(
    [QUERY_KEYS.LEAGUE, league],
    () => apiGetLeague({ league }),
    { initialData }
  );

  return { leagues: data, isLoading, isError };
};
