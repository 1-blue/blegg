import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiAddViewCountOfPost } from "@src/apis";

import type {
  ApiAddViewCountOfPostRequest,
  ApiFindOnePostResponse,
} from "@src/types/apis";

interface Props extends ApiAddViewCountOfPostRequest {}

/** 2023/07/13 - 게시글 조회수 증가 훅 - by 1-blue */
export const useAddViewCountOfPost = ({ idx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(apiAddViewCountOfPost, {
    onSuccess() {
      queryClient.setQueryData<ApiFindOnePostResponse>(
        [QUERY_KEYS.POST, idx],
        (prev) => prev && { ...prev, viewCount: prev.viewCount + 1 }
      );
    },
  });

  return mutate;
};
