import { useInfiniteQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindManyReply } from "@src/apis";

import type {
  ApiFindManyReplyRequest,
  ApiFindManyReplyResponse,
} from "@src/types/apis";

interface Props extends ApiFindManyReplyRequest {
  postIdx: number;
  commentIdx: number;
}

/** 2023/07/18 - 여러 답글들 요청 훅 - by 1-blue */
export const useFindManyReply = (
  { postIdx, commentIdx, start, count }: Props,
  initialDatas?: ApiFindManyReplyResponse[]
) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ApiFindManyReplyResponse>(
      [QUERY_KEYS.REPLYS, postIdx, commentIdx],
      ({ pageParam = start }) =>
        apiFindManyReply(postIdx, commentIdx, { start: pageParam, count }),
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
    replies: data,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
