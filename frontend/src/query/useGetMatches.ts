import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetMatches } from "@src/apis";

import type {
  ApiGetMatchesRequest,
  ApiGetMatchesResponse,
} from "@src/types/apis";

interface Props extends ApiGetMatchesRequest {}

/** 2023/07/03 - 특정 유저의 경기들 정보 요청 훅 - by 1-blue */
export const useGetMatches = ({ name, start, count }: Props) => {
  const { data, isLoading, isFetching, isError, fetchNextPage } =
    useInfiniteQuery<ApiGetMatchesResponse>(
      [QUERY_KEYS.MATCHES, name],
      ({ pageParam = start }) =>
        apiGetMatches({ name, start: pageParam, count }),
      {
        getNextPageParam(lastPage, pages) {
          return pages.reduce((curr, prev) => curr + prev.length, 0);
        },
      }
    );

  return { matches: data, isLoading, isError, fetchNextPage, isFetching };
};
