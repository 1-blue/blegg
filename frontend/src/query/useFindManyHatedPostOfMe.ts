import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyHatedPostOfMe } from "@src/apis";

import type {
  ApiFindManyHatedPostOfMeRequest,
  ApiFindManyHatedPostOfMeResponse,
} from "@src/types/apis";

interface Props extends ApiFindManyHatedPostOfMeRequest {}

/** 2023/07/18 - 로그인한 유저가 싫어요한 게시글들 요청 훅 - by 1-blue */
export const useFindManyHatedPostOfMe = (
  { start, count }: Props,
  initialDatas?: ApiFindManyHatedPostOfMeResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyHatedPostOfMeResponse>(
      [QUERY_KEYS.ME, QUERY_KEYS.POSTS, QUERY_KEYS.HATED],
      ({ pageParam = start }) =>
        apiFindManyHatedPostOfMe({ start: pageParam, count }),
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
    hatedPosts: data,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
