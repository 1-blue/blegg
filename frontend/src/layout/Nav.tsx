import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Bars3Icon as SBars3Icon,
  XMarkIcon as SXMarkIcon,
} from "@heroicons/react/24/solid";

import { routerElements } from "@src/router";
import useWindowSize from "@src/hooks/useWindowSize";
import ASideLink from "@src/components/Layout/ASideLink";
import ASideSearch from "@src/components/Layout/ASideSearch";

/** 2023/06/19 - 네비게이션 컴포넌트 - by 1-blue */
const Nav = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();

  const isShow = width <= 768;
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (!showNavBar)
      return void (window.document.body.style.overflowY = "auto");

    window.document.body.style.overflowY = "hidden";

    () => (window.document.body.style.overflowY = "auto");
  }, [showNavBar]);

  return (
    <nav>
      <article className="p-8 flex justify-between border-b border-main-line">
        <section className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="로고" />
          <h1 className="font-black text-2xl">blegg</h1>
        </section>

        {isShow && (
          <section onClick={() => setShowNavBar((prev) => !prev)}>
            {showNavBar ? (
              <SXMarkIcon className="w-10 h-10" role="button" />
            ) : (
              <SBars3Icon className="w-10 h-10" role="button" />
            )}
          </section>
        )}
      </article>

      {(!isShow || showNavBar) && (
        <article className="animate-move-left md:animate-none fixed inset-0 md:relative top-[105px] md:top-0 bg-main-bg ">
          <section className="p-8 border-b border-main-line">
            <ASideSearch />
          </section>

          <section>
            {routerElements.map(({ path, icon, label }) => (
              <ASideLink
                path={path}
                icon={icon}
                label={label}
                isActive={pathname === path}
                onClick={() => setShowNavBar(false)}
              />
            ))}
          </section>
        </article>
      )}
    </nav>
  );
};

export default Nav;
