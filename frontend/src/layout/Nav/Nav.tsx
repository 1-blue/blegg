import { useLocation } from "react-router-dom";

import { routerElements } from "@src/router";

import NavLink from "@src/layout/Nav/NavLink";

/** 2023/06/19 - 네비게이션 컴포넌트 - by 1-blue */
const Nav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="py-4">
      {routerElements.map(({ path, icon, label }) => (
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
