import { Navigate } from "react-router-dom";

/** 2023/07/09 - OAuth 로그인 실패 페이지 ( 백엔드에서 리다이렉트 ) - by 1-blue */
const OAuthFailure = () => {
  // TODO:
  alert("로그인에 실패했습니다.\n메인 페이지로 이동됩니다.");

  return <Navigate to="/" replace />;
};

export default OAuthFailure;
