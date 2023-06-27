import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

/** 2023/06/27 - 기본 인디케이터 ( 로고 모양 ) - by 1-blue */
const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      xmlSpace="preserve"
      className={twMerge("w-48 h-48 fill-main-700 animate-spin-y", className)}
    >
      <path d="M14.8,5.1L8.8,33C5.8,29.9,4,25.5,4,21C4,13.6,8.5,7.3,14.8,5.1 M20,0C9,0,0,9.4,0,21c0,8.4,4.7,15.5,11.4,19L20,0L20,0z" />
      <path d="M25.2,5.1C31.5,7.3,36,13.6,36,21c0,4.5-1.8,8.9-4.8,12L25.2,5.1 M20,0l8.6,40C35.3,36.5,40,29.4,40,21C40,9.4,31,0,20,0L20,0z" />
    </svg>
  );
};

export default Logo;
