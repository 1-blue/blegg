import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import QUERY_KEYS from ".";

import { apiDeletePost } from "@src/apis";

/** 2023/07/15 - 게시글 제거 훅 - by 1-blue */
export const useDeletePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(apiDeletePost, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.POSTS]);

      alert("게시글이 제거되었습니다.\n커뮤니티로 이동됩니다.");

      navigate("/community");
    },
  });

  return mutate;
};
