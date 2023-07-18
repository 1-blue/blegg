import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiCreateComment } from "@src/apis";

import type { ApiCreateCommentRequest } from "@src/types/apis";

interface Props {
  postIdx: number;
}

/** 2023/07/16 - 댓글 생성 훅 - by 1-blue */
export const useCreateComment = ({ postIdx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (body: ApiCreateCommentRequest) => apiCreateComment(postIdx, body),
    {
      onSuccess() {
        queryClient.invalidateQueries([QUERY_KEYS.COMMENTS, postIdx]);

        alert("댓글이 생성되었습니다.");
      },
    }
  );

  return mutate;
};
