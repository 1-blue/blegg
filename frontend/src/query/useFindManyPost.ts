import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyPost } from "@src/apis";

import type {
  ApiFindManyPostRequest,
  ApiFindManyPostResponse,
} from "@src/types/apis";

interface Props extends ApiFindManyPostRequest {}

/** 2023/07/11 - 여러 게시글들 요청 훅 - by 1-blue */
export const useFindManyPost = (
  { start, count, sortBy, search }: Props,
  initialDatas?: ApiFindManyPostResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyPostResponse>(
      [QUERY_KEYS.POSTS, sortBy, search],
      ({ pageParam = start }) =>
        apiFindManyPost({ start: pageParam, count, sortBy, search }),
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
