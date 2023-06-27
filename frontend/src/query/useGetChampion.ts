import { QueryClient, useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetChampion } from "@src/apis";

import { getPrevAndNextRiotChampionNames } from "@src/libs";

import type {
  ApiGetChampionRequest,
  ApiGetChampionResponse,
} from "@src/types/apis";

interface Props extends ApiGetChampionRequest {}

/** 2023/06/22 - 특정 챔피언 정보 요청 훅 - by 1-blue */
export const useGetChampion = ({ name }: Props) => {
  const { data, isLoading, isError } = useQuery<ApiGetChampionResponse>(
    [QUERY_KEYS.CHAMPION, name],
    () => apiGetChampion({ name })
  );

  /** 2023/06/25 - 이전/다음 챔피언 prefetch - by 1-blue */
  const queryClient = new QueryClient();
  const { prevChampionName, nextChampionName } =
    getPrevAndNextRiotChampionNames(name);
  queryClient.prefetchQuery([QUERY_KEYS.CHAMPION, prevChampionName], () =>
    apiGetChampion({ name: prevChampionName })
  );
  queryClient.prefetchQuery([QUERY_KEYS.CHAMPION, nextChampionName], () =>
    apiGetChampion({ name: nextChampionName })
  );

  return { champion: data, isLoading, isError };
};
