import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon as SChevronRightIcon } from "@heroicons/react/24/solid";

import { useNavBarActions } from "@src/contexts/NavBar";

interface Props {
  path: string;
  icon: [React.ReactNode, React.ReactNode];
  label: string;
  isActive: boolean;
}

/** 2023/06/20 - 사이드바의 nav 링크 컴포넌트 - by 1-blue */
const NavLink: React.FC<Props> = ({ path, icon, label, isActive }) => {
  const { close } = useNavBarActions();

  return (
    <Link
      key={path}
      to={path}
      className={twMerge(
        "flex items-center px-8 py-4 bg-main-bg text-main-text transition-colors hover:text-main-500 focus:text-main-600 focus:outline-none",
        isActive && "text-main-400"
      )}
      onClick={close}
    >
      {isActive ? icon[1] : icon[0]}
      <span className="ml-4">{label}</span>
      <SChevronRightIcon className="w-6 h-6 ml-auto" />
    </Link>
  );
};

export default NavLink;
