import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import QUERY_KEYS from ".";

import { apiUpdatePost } from "@src/apis";

import type { ApiUpdatePostRequest } from "@src/types/apis";

interface Props {
  idx: number;
}

/** 2023/07/15 - 게시글 생성 훅 - by 1-blue */
export const useUpdatePost = ({ idx }: Props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (body: ApiUpdatePostRequest) => apiUpdatePost(body, idx),
    {
      onSuccess(updatedPost) {
        queryClient.invalidateQueries([QUERY_KEYS.POSTS]);
        queryClient.invalidateQueries([QUERY_KEYS.POST, updatedPost.idx]);

        alert("게시글이 수정되었습니다.");

        navigate(`/community/${updatedPost.idx}`);
      },
    }
  );

  return mutate;
};
