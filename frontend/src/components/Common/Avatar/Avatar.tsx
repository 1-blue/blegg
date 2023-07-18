import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import type { SimpleUser } from "@src/types";
interface Props extends SimpleUser {
  /** TailwindCss classname */
  className?: string;
}

/** 2023/07/11 - 아바타 컴포넌트 - by 1-blue */
const Avatar: React.FC<Props> = ({
  avatar,
  nickname,
  summonerName,
  className,
}) => {
  return (
    <figure className="flex items-center space-x-2">
      <img
        src={avatar}
        alt={nickname + "님의 아바타"}
        className={twMerge("w-10 h-10 bg-white rounded-lg", className)}
      />
      <div className="flex flex-col">
        <span className="text-sm">{nickname}</span>
        <Link
          to={`/summoner?q=${summonerName}`}
          className="text-xs hover:underline hover:underline-offset-4"
        >
          {summonerName}
        </Link>
      </div>
    </figure>
  );
};

export default Avatar;
