import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import QUERY_KEYS from ".";

import { apiUpdateMe } from "@src/apis";

/** 2023/07/19 - 로그인한 유저 정보 수정 훅 - by 1-blue */
export const useUpdateMe = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation(apiUpdateMe, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.ME]);

      alert("유저 정보가 수정되었습니다.");

      navigate("/profile");
    },
  });

  return { mutate, error };
};
