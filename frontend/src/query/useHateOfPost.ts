import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiDeleteRatingOfPost } from "@src/apis";

import type { ApiDeleteRatingOfPostRequest } from "@src/types/apis";

interface Props extends ApiDeleteRatingOfPostRequest {}

/** 2023/07/13 - 게시글 싫어요 처리 훅 - by 1-blue */
export const useHateOfPost = ({ idx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(apiDeleteRatingOfPost, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.POST, idx]);

      alert("싫어요를 눌렀습니다.");
    },
  });

  return mutate;
};
