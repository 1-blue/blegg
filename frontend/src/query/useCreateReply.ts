import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiCreateReply } from "@src/apis";

import type { ApiCreateReplyRequest } from "@src/types/apis";

interface Props {
  postIdx: number;
  commentIdx: number;
}

/** 2023/07/18 - 답글 생성 훅 - by 1-blue */
export const useCreateReply = ({ postIdx, commentIdx }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (body: ApiCreateReplyRequest) => apiCreateReply(postIdx, commentIdx, body),
    {
      onSuccess() {
        queryClient.invalidateQueries([QUERY_KEYS.REPLYS, postIdx, commentIdx]);

        alert("답글이 생성되었습니다.");
      },
    }
  );

  return mutate;
};
