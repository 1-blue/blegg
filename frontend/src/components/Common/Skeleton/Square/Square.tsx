import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

/** 2023/06/23 - Skeleton UI Square - by 1-blue */
const Square: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-10 h-10 rounded-md animate-skeleton-gradient",
        className
      )}
    />
  );
};

export default Square;
