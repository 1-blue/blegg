import {
  EyeIcon as OEyeIcon,
  HandThumbUpIcon as OHandThumbUpIcon,
  HandThumbDownIcon as OHandThumbDownIcon,
} from "@heroicons/react/24/outline";

import Avatar from "../Avatar/Avatar";
import Square from "../Square";

/** 2023/07/11 - "Post" Skeleton UI - by 1-blue */
const Post: React.FC = () => {
  return (
    <li className="block bg-main-box-bg border-2 border-main-line rounded-md overflow-hidden duration-300 transition-all hover:scale-105">
      {/* 썸네일 */}
      <Square className="w-full pt-[60%]" />

      <div className="m-4 space-y-2">
        {/* 제목 && 작성시간 */}
        <div className="flex justify-between">
          {/* 제목 */}
          <Square className="w-20 h-6" />

          {/* 작성시간 */}
          <Square className="w-12 h-4" />
        </div>
        {/* 내용 */}
        <div className="space-y-1">
          <Square className="w-2/3 h-5" />
          <Square className="w-1/2 h-5" />
        </div>

        {/* 작성자 && 조회수/좋아요/싫어요 */}
        <div className="flex justify-between items-end">
          <Avatar />

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
              <span className="text-xs">{0}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;
