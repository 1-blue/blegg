import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from "@src/query";

/** 2023/07/09 - OAuth 로그인 성공 페이지 ( 백엔드에서 리다이렉트 ) - by 1-blue */
const OAuthSuccess = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries([QUERY_KEYS.ME]);

    alert("로그인 되었습니다.\n메인 페이지로 이동됩니다.");
  }, [queryClient]);

  return <Navigate to="/" replace />;
};

export default OAuthSuccess;
