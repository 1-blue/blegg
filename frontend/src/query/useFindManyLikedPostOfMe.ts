import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyLikedPostOfMe } from "@src/apis";

import type {
  ApiFindManyLikedPostOfMeRequest,
  ApiFindManyLikedPostOfMeResponse,
} from "@src/types/apis";

interface Props extends ApiFindManyLikedPostOfMeRequest {}

/** 2023/07/18 - 로그인한 유저가 좋아요한 게시글들 요청 훅 - by 1-blue */
export const useFindManyLikedPostOfMe = (
  { start, count }: Props,
  initialDatas?: ApiFindManyLikedPostOfMeResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyLikedPostOfMeResponse>(
      [QUERY_KEYS.ME, QUERY_KEYS.POSTS, QUERY_KEYS.LIKED],
      ({ pageParam = start }) =>
        apiFindManyLikedPostOfMe({ start: pageParam, count }),
      {
        getNextPageParam(lastPage) {
          return lastPage.length === count
            ? lastPage[lastPage.length - 1].postIdx
            : null;
        },
        initialData: initialDatas && {
          pageParams: [],
          pages: initialDatas,
        },
      }
    );

  return {
    likedPosts: data,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
