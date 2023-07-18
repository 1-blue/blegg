import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiDeleteReply } from "@src/apis";

interface Props {
  postIdx: number;
  commentIdx: number;
  replyIdx: number;
}

/** 2023/07/18 - 답글 제거 훅 - by 1-blue */
export const useDeleteReply = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ postIdx, commentIdx, replyIdx }: Props) =>
      apiDeleteReply(postIdx, commentIdx, replyIdx),
    {
      onSuccess({ postIdx, commentIdx }) {
        queryClient.invalidateQueries([QUERY_KEYS.REPLYS, postIdx, commentIdx]);

        alert("답글이 제거되었습니다.");
      },
    }
  );

  return mutate;
};
