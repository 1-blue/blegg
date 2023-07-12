import { Link } from "react-router-dom";
import { type Variants, motion } from "framer-motion";
import {
  EyeIcon as OEyeIcon,
  HandThumbUpIcon as OHandThumbUpIcon,
  HandThumbDownIcon as OHandThumbDownIcon,
} from "@heroicons/react/24/outline";

import { timeFormat } from "@src/libs";

import Avatar from "@src/components/Common/Avatar";

import type { PostWithUser } from "@src/types";

const variants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

interface Props extends PostWithUser {}

const Post: React.FC<Props> = ({
  idx,
  title,
  thumbnail,
  content,
  createdAt,
  viewCount,
  user,
}) => {
  return (
    <motion.li variants={variants} layoutId={idx + ""}>
      <Link
        to={`/community/${idx}`}
        className="block bg-main-box-bg border-2 border-main-line rounded-md overflow-hidden duration-300 transition-all hover:scale-105"
      >
        {/* 썸네일 */}
        <figure
          style={{ backgroundImage: `url("${thumbnail}")` }}
          className="w-full pt-[60%] bg-main-text bg-center bg-no-repeat"
        >
          <img hidden src={thumbnail} alt="게시글 썸네일" />
        </figure>

        <div className="m-4 space-y-2">
          {/* 제목 && 작성시간 */}
          <div className="flex">
            {/* 제목 */}
            <h6 className="flex-1 text-lg font-bold truncate truncate-1">
              {title}
            </h6>

            {/* 작성시간 */}
            <time className="text-xxs">{timeFormat(createdAt)}</time>
          </div>
          {/* 내용 */}
          <p className="text-sm whitespace-pre-line truncate truncate-2">
            {content}
          </p>
          {/* 작성자 && 조회수/좋아요/싫어요 */}
          <div className="flex justify-between items-end">
            {/* 작성자 */}
            <Avatar {...user} />

            {/* 조회수/좋아요/싫어요 */}
            <div className="flex space-x-3">
              <div className="flex items-center space-x-1">
                <OHandThumbUpIcon className="w-4 h-4" />
                <span className="text-xs">{0}</span>
              </div>
              <div className="flex items-center space-x-1">
                <OHandThumbDownIcon className="w-4 h-4" />
                <span className="text-xs">{0}</span>
              </div>
              <div className="flex items-center space-x-1">
                <OEyeIcon className="w-4 h-4" />
                <span className="text-xs">{viewCount}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default Post;
