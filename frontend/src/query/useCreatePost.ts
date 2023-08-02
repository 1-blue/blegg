import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import QUERY_KEYS from ".";

import { apiCreatePost } from "@src/apis";

/** 2023/07/15 - 게시글 생성 훅 - by 1-blue */
export const useCreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(apiCreatePost, {
    onSuccess(createdPost) {
      queryClient.invalidateQueries([QUERY_KEYS.POSTS]);

      alert("게시글이 생성되었습니다.");

      navigate(`/community/${createdPost.idx}`);
    },
  });

  return mutate;
};
