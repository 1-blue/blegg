import {
  Bars3Icon as SBars3Icon,
  XMarkIcon as SXMarkIcon,
} from "@heroicons/react/24/solid";

import { useNavBarActions, useNavBarValue } from "@src/contexts/NavBar";

/** 2023/06/21 - 사이드바 햄버거 버튼 컴포넌트 - by 1-blue */
const ASideHamburger: React.FC = () => {
  const { isShowNavBar } = useNavBarValue();
  const { toggle } = useNavBarActions();

  return (
    <article className="absolute top-8 right-8 text-main-text">
      <section onClick={toggle}>
        {isShowNavBar ? (
          <SXMarkIcon className="w-10 h-10" role="button" />
        ) : (
          <SBars3Icon className="w-10 h-10" role="button" />
        )}
      </section>
    </article>
  );
};

export default ASideHamburger;
