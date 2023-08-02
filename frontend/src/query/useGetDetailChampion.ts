import { QueryClient, useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetDetailChampion } from "@src/apis";

import { getPrevAndNextRiotChampionNames } from "@src/libs";

import type {
  ApiGetDetailChampionRequest,
  ApiGetDetailChampionResponse,
} from "@src/types/apis";

interface Props extends ApiGetDetailChampionRequest {}

/** 2023/06/22 - 특정 챔피언 상세 정보 요청 훅 - by 1-blue */
export const useGetDetailChampion = (
  { name }: Props,
  initialData?: ApiGetDetailChampionResponse
) => {
  const { data, isLoading, isError } = useQuery<ApiGetDetailChampionResponse>(
    [QUERY_KEYS.CHAMPION, name],
    () => apiGetDetailChampion({ name }),
    { initialData }
  );

  /** 2023/06/25 - 이전/다음 챔피언 prefetch - by 1-blue */
  const queryClient = new QueryClient();
  const { prevChampionName, nextChampionName } =
    getPrevAndNextRiotChampionNames(name);
  queryClient.prefetchQuery([QUERY_KEYS.CHAMPION, prevChampionName], () =>
    apiGetDetailChampion({ name: prevChampionName })
  );
  queryClient.prefetchQuery([QUERY_KEYS.CHAMPION, nextChampionName], () =>
    apiGetDetailChampion({ name: nextChampionName })
  );

  return { champion: data, isLoading, isError };
};
