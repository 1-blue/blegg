import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiUpdateReply } from "@src/apis";

import type { ApiUpdateReplyRequest } from "@src/types/apis";

interface Props {
  postIdx: number;
  commentIdx: number;
  replyIdx: number;
}

/** 2023/07/18 - 답글 수정 훅 - by 1-blue */
export const useUpdateReply = ({ postIdx, commentIdx, replyIdx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (body: ApiUpdateReplyRequest) =>
      apiUpdateReply(postIdx, commentIdx, replyIdx, body),
    {
      onSuccess() {
        queryClient.invalidateQueries([QUERY_KEYS.REPLYS, postIdx, commentIdx]);

        alert("답글이 수정되었습니다.");
      },
    }
  );

  return mutate;
};
