import useWindowSize from "@src/hooks/useWindowSize";

import { useNavBarValue } from "@src/contexts/NavBar";

import ASideLogo from "@src/layout/ASide/ASideLogo";
import ASideHamburger from "@src/layout/ASide/ASideHamburger";
import ASideSearch from "@src/layout/ASide/ASideSearch";
import Nav from "@src/layout/Nav";

/** 2023/06/19 - 사이드 컴포넌트 - by 1-blue */
const ASide: React.FC = () => {
  const { width } = useWindowSize();

  const overMedium = width <= 768;
  const { isShowNavBar } = useNavBarValue();

  return (
    <aside className="sticky top-0 flex-shrink-0 md:w-[300px] h-auto md:h-screen bg-main-bg border-r border-main-line overflow-y-auto">
      {/* 로고 */}
      <ASideLogo />

      {/* 햄버거 버튼 */}
      {overMedium && <ASideHamburger />}

      {(!overMedium || isShowNavBar) && (
        <article className="animate-move-left md:animate-none fixed md:static md:top-[105px] w-full h-full md:w-auto md:h-auto bg-main-bg">
          {/* 검색창 */}
          <ASideSearch />

          {/* 네비게이션바 */}
          <Nav />
        </article>
      )}
    </aside>
  );
};

export default ASide;
