import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from ".";

import { apiGetSpell } from "@src/apis";

import type { ApiGetSpellRequest, ApiGetSpellResponse } from "@src/types/apis";

interface Props extends ApiGetSpellRequest {}

/** 2023/07/02 - 특정 스펠 정보 요청 훅 - by 1-blue */
export const useGetSpell = ({ key }: Props) => {
  const { data, isLoading, isError } = useQuery<ApiGetSpellResponse>(
    [QUERY_KEYS.SPELL, key],
    () => apiGetSpell({ key })
  );

  return { spell: data, isLoading, isError };
};
