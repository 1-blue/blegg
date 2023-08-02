import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiFindOnePost } from "@src/apis";

import type {
  ApiFindOnePostRequest,
  ApiFindOnePostResponse,
} from "@src/types/apis";

interface Props extends ApiFindOnePostRequest {}

/** 2023/07/11 - 단일 게시글 요청 훅 - by 1-blue */
export const useFindOnePost = (
  { idx }: Props,
  initialData?: ApiFindOnePostResponse
) => {
  const { data, isLoading, isError } = useQuery<ApiFindOnePostResponse>(
    [QUERY_KEYS.POST, idx],
    () => apiFindOnePost({ idx }),
    { initialData }
  );

  return { post: data, isLoading, isError };
};
