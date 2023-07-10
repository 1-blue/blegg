import { Navigate } from "react-router-dom";

/** 2023/07/09 - OAuth 로그인 성공 페이지 ( 백엔드에서 리다이렉트 ) - by 1-blue */
const OAuthSuccess = () => {
  // TODO:
  alert("로그인 되었습니다.\n메인 페이지로 이동됩니다.");

  return <Navigate to="/" replace />;
};

export default OAuthSuccess;
