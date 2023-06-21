import { createContext, useContext, useState, useMemo } from "react";

// 768px 이하인 경우 네비게이션 바의 렌더링 여부를 결정하는 상태

const NavBarValueContext = createContext<boolean>(false);
const NavBarActionsContext = createContext<null | {
  open(): void;
  close(): void;
  toggle(): void;
}>(null);

interface Props {
  initialValue?: boolean;
}
/** 2023/06/21 - navbar provider - by 1-blue */
const NavBarProvider: React.FC<React.PropsWithChildren<Props>> = ({
  initialValue = false,
  children,
}) => {
  const [isShowNavBar, setIsShowNavBar] = useState(initialValue);

  const actions = useMemo(
    () => ({
      open() {
        setIsShowNavBar(true);
      },
      close() {
        setIsShowNavBar(false);
      },
      toggle() {
        setIsShowNavBar((prev) => !prev);
      },
    }),
    []
  );

  return (
    <NavBarValueContext.Provider value={isShowNavBar}>
      <NavBarActionsContext.Provider value={actions}>
        {children}
      </NavBarActionsContext.Provider>
    </NavBarValueContext.Provider>
  );
};

/** 2023/06/21 - navbar value hook - by 1-blue */
const useNavBarValue = () => {
  const isShowNavBar = useContext(NavBarValueContext);

  if (isShowNavBar === null) {
    throw new Error("NavBarContextValue is not defined");
  }

  return { isShowNavBar };
};
/** 2023/06/21 - navbar action hook - by 1-blue */
const useNavBarActions = () => {
  const actions = useContext(NavBarActionsContext);

  if (actions === null) {
    throw new Error("NavBarContextActions is not defined");
  }

  return actions;
};

export default NavBarProvider;
export { useNavBarValue, useNavBarActions };
