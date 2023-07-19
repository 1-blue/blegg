import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyPostOfMe } from "@src/apis";

import type {
  ApiFindManyPostOfMeRequest,
  ApiFindManyPostOfMeResponse,
} from "@src/types/apis";

interface Props extends ApiFindManyPostOfMeRequest {}

/** 2023/07/18 - 로그인한 유저가 작성한 게시글들 요청 훅 - by 1-blue */
export const useFindManyPostOfMe = (
  { start, count }: Props,
  initialDatas?: ApiFindManyPostOfMeResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyPostOfMeResponse>(
      [QUERY_KEYS.ME, QUERY_KEYS.POSTS],
      ({ pageParam = start }) =>
        apiFindManyPostOfMe({ start: pageParam, count }),
      {
        getNextPageParam(lastPage) {
          return lastPage.length === count
            ? lastPage[lastPage.length - 1].idx
            : null;
        },
        initialData: initialDatas && {
          pageParams: [],
          pages: initialDatas,
        },
      }
    );

  return {
    posts: data,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
