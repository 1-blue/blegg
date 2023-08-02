import { Link } from "react-router-dom";
import { type Variants, motion } from "framer-motion";

import { timeFormat } from "@src/libs";

import { ApiFindManyPostResponse } from "@src/types/apis";

import PostInfo from "@src/components/Community/PostInfo";

const variants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

type Props = ApiFindManyPostResponse[0];

const Post: React.FC<Props> = ({
  idx,
  title,
  thumbnail,
  content,
  createdAt,
  viewCount,
  user,
  ratingOfUsers,
}) => {
  return (
    <motion.li variants={variants} layoutId={idx + ""} className="h-full">
      <Link
        to={`/community/${idx}`}
        className="h-full flex flex-col bg-main-box-bg border-2 border-main-line rounded-md overflow-hidden duration-300 transition-all hover:scale-105"
      >
        {/* 썸네일 */}
        <figure
          style={{ backgroundImage: `url("${thumbnail}")` }}
          className="w-full pt-[60%] bg-main-text bg-center bg-no-repeat"
        >
          <img hidden src={thumbnail} alt="게시글 썸네일" />
        </figure>

        <div className="flex-1 m-4 flex flex-col justify-between">
          <div className="space-y-2">
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
          </div>
          {/* 작성자 && 조회수/좋아요/싫어요 */}
          <PostInfo
            idx={idx}
            user={user}
            viewCount={viewCount}
            ratingOfUsers={ratingOfUsers}
          />
        </div>
      </Link>
    </motion.li>
  );
};

export default Post;
