import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyComment } from "@src/apis";

import type {
  ApiFindManyCommentRequest,
  ApiFindManyCommentResponse,
} from "@src/types/apis";

interface Props extends ApiFindManyCommentRequest {
  postIdx: number;
}

/** 2023/07/16 - 여러 댓글들 요청 훅 - by 1-blue */
export const useFindManyComment = (
  { postIdx, start, count }: Props,
  initialDatas?: ApiFindManyCommentResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyCommentResponse>(
      [QUERY_KEYS.COMMENTS, postIdx],
      ({ pageParam = start }) =>
        apiFindManyComment(postIdx, { start: pageParam, count }),
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
    comments: data,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
