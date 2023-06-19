import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { routerElements } from "@src/router";

/** 2023/06/19 - 네비게이션 컴포넌트 - by 1-blue */
const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <section className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="로고" />
        <h1 className="font-black text-2xl">blegg</h1>
      </section>

      <input type="search" className="my-6" />

      {routerElements.map(({ path, icon, label }) => (
        <Link
          key={path}
          to={path}
          className={twMerge(
            "flex items-center space-x-4 py-4 text-main-text",
            pathname === path && "text-main-400"
          )}
        >
          {pathname === path ? icon[1] : icon[0]}
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
