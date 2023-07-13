import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiCreateRatingOfPost } from "@src/apis";

import type { ApiCreateRatingOfPostRequest } from "@src/types/apis";

interface Props extends ApiCreateRatingOfPostRequest {}

/** 2023/07/13 - 게시글 좋아요 처리 훅 - by 1-blue */
export const useLikeOfPost = ({ idx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(apiCreateRatingOfPost, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.POST, idx]);

      alert("좋아요를 눌렀습니다.");
    },
  });

  return mutate;
};
