import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

/** 2023/06/23 - Skeleton UI Circle - by 1-blue */
const Circle: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-10 h-10 rounded-full animate-skeleton-gradient",
        className
      )}
    />
  );
};

export default Circle;
