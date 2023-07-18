import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiDeleteComment } from "@src/apis";

interface Props {
  postIdx: number;
  commentIdx: number;
}

/** 2023/07/16 - 댓글 제거 훅 - by 1-blue */
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ postIdx, commentIdx }: Props) => apiDeleteComment(postIdx, commentIdx),
    {
      onSuccess({ postIdx }) {
        queryClient.invalidateQueries([QUERY_KEYS.COMMENTS, postIdx]);

        alert("댓글이 제거되었습니다.");
      },
    }
  );

  return mutate;
};
