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
  { start, count }: Props,
  initialDatas?: ApiFindManyPostResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage } =
    useInfiniteQuery<ApiFindManyPostResponse>(
      [QUERY_KEYS.POSTS],
      ({ pageParam = start }) => apiFindManyPost({ start: pageParam, count }),
      {
        getNextPageParam(_, pages) {
          return pages.reduce((curr, prev) => curr + prev.length, 0);
        },
        initialData: initialDatas && {
          pageParams: [],
          pages: initialDatas,
        },
      }
    );

  return { posts: data, isLoading, isError, isFetching, fetchNextPage };
};
