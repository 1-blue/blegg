import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetMe } from "@src/apis";

import type { ApiGetMeRequest, ApiGetMeResponse } from "@src/types/apis";

interface Props extends ApiGetMeRequest {}

/** 2023/07/07 - 로그인한 유저 정보 요청 훅 - by 1-blue */
export const useGetMe = ({}: Props = {}, initialData?: ApiGetMeResponse) => {
  const { data, isLoading, isError } = useQuery<ApiGetMeResponse>(
    [QUERY_KEYS.ME],
    apiGetMe,
    { initialData }
  );

  return { me: data, isLoading, isError };
};
