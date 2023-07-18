import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiUpdateComment } from "@src/apis";

import type { ApiUpdateCommentRequest } from "@src/types/apis";

interface Props {
  postIdx: number;
  commentIdx: number;
}

/** 2023/07/16 - 댓글 수정 훅 - by 1-blue */
export const useUpdateComment = ({ postIdx, commentIdx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (body: ApiUpdateCommentRequest) =>
      apiUpdateComment(postIdx, commentIdx, body),
    {
      onSuccess() {
        queryClient.invalidateQueries([QUERY_KEYS.COMMENTS, postIdx]);

        alert("댓글이 수정되었습니다.");
      },
    }
  );

  return mutate;
};
