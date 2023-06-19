import { twMerge } from "tailwind-merge";
import type { Size, SizeCoords } from "@src/types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** How large should the button be? */
  size?: Size;
  /** Button contents */
  label?: string;
}

/** 2023/06/19 - 버튼 기본 스타일 - by 1-blue */
const BASE_BUTTON_CLASSES =
  "text-white bg-main-500 border-main-500 rounded-md leading-none transition-colors hover:bg-main-600 focus:outline-none focus:ring-2 focus:ring-main-600 focus:ring-offset-2";

/** 2023/06/19 - 버튼 사이즈별 스타일 - by 1-blue */
const getSizeClasses: SizeCoords = {
  xs: "text-xs font-medium px-3 py-2",
  sm: "text-sm font-medium px-3.5 py-2",
  base: "text-base font-medium px-4 py-2.5",
  md: "text-md font-bold px-4 py-2.5",
  lg: "text-lg font-bold px-5 py-3",
  xl: "text-xl font-bold px-6 py-3",
  "2xl": "text-2xl font-black px-8 py-4",
  "3xl": "text-3xl font-black px-9 py-4",
  "4xl": "text-4xl font-black px-10 py-5",
};

/** 2023/06/19 - 버튼 컴포넌트 - by 1-blue */
const Button: React.FC<Props> = ({
  size = "base",
  label = "Button",
  ...props
}) => {
  const sizeClass = getSizeClasses[size];

  return (
    <button
      className={twMerge(BASE_BUTTON_CLASSES, sizeClass, "transition-colors")}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
