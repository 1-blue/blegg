import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon as SChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  path: string;
  icon: [React.ReactNode, React.ReactNode];
  label: string;
  isActive: boolean;
  onClick: () => void;
}

/** 2023/06/20 - 사이드바 링크 컴포넌트 - by 1-blue */
const ASideLink: React.FC<Props> = ({
  path,
  icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <Link
      key={path}
      to={path}
      className={twMerge(
        "flex items-center px-8 py-4 text-main-text transition-colors hover:text-main-500 focus:text-main-600 focus:outline-none",
        isActive && "text-main-400"
      )}
      onClick={onClick}
    >
      {isActive ? icon[1] : icon[0]}
      <span className="ml-4">{label}</span>
      <SChevronRightIcon className="w-6 h-6 ml-auto" />
    </Link>
  );
};

export default ASideLink;
