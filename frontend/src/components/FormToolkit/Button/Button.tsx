import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 이름 */
  label: string;
}

/** 2023/07/05 - button 컴포넌트 - by 1-blue */
const Button: React.FC<Props> = ({ label, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "px-2 py-3 rounded-md transition-colors bg-main-500 hover:bg-main-500/80 focus:outline-none focus:ring focus:ring-main-500 focus:ring-offset-4 focus:ring-offset-main-bg",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
