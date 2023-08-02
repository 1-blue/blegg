import axiosInstance from ".";

import type { ApiGetSpellHandler, ApiGetSpellResponse } from "@src/types/apis";

/** 2023/07/02 - 특정 스펠 정보 요청 - by 1-blue */
export const apiGetSpell: ApiGetSpellHandler = async ({ key }) => {
  const { data } = await axiosInstance.get<ApiGetSpellResponse>(
    `/riot/spell/${key}`
  );

  return data;
};
