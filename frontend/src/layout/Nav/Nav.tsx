import { useLocation } from "react-router-dom";

import { routerElements } from "@src/router";

import { useGetMe } from "@src/query/useGetMe";

import NavLink from "@src/layout/Nav/NavLink";

/** 2023/06/19 - 네비게이션 컴포넌트 - by 1-blue */
const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const { me } = useGetMe();

  return (
    <nav className="py-4">
      {routerElements
        .filter(({ isAuth }) => {
          // 누구나 접근 가능
          if (isAuth === null) return true;
          // 로그인한 유저만 접근 가능 && 로그인한 경우
          if (isAuth === true && me) return true;
          // 로그인하지 않은 유저만 접근 가능 && 로그인하지 않은 경우
          if (isAuth === false && !me) return true;

          // 조건에 만족하지 않으면 렌더링 X
          return false;
        })
        .map(({ path, icon, label }) => (
          <NavLink
            key={path}
            path={path}
            icon={icon}
            label={label}
            isActive={pathname === path}
          />
        ))}
    </nav>
  );
};

export default Nav;
