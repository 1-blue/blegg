import { Navigate } from "react-router-dom";

import { useGetMe } from "@src/query";

interface Props {
  isAuth: boolean | null;
}

/**
 * 2023/06/19 - 인증 관련된 조건 확인 HOC - by 1-blue
 * true: 로그인한 유저만 접근 가능
 * false: 로그인하지 않은 유저만 접근 가능
 * null: 누구나 접근 가능
 * */
const AuthenticationCheck: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  isAuth,
}) => {
  const { me } = useGetMe();

  // 로그인하지 않고 접근
  if (isAuth === true && !me) return <Navigate replace to="/signin" />;
  // 로그인하고 접근
  else if (isAuth === false && me) return <Navigate replace to="/" />;

  // 접근 조건에 만족
  return children;
};

export default AuthenticationCheck;
