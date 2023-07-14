import {
  EyeIcon as OEyeIcon,
  HandThumbUpIcon as OHandThumbUpIcon,
  HandThumbDownIcon as OHandThumbDownIcon,
  LinkIcon as OLinkIcon,
} from "@heroicons/react/24/outline";

import Avatar from "../Avatar";

/** 2023/07/14 - "PostInfo" Skeleton UI - by 1-blue */
const PostInfo = () => {
  return (
    <section className="flex justify-between space-x-8">
      <Avatar />

      <div className="grid gap-1 grid-cols-2 place-items-center">
        <div className="flex items-center space-x-1">
          <OEyeIcon className="w-4 h-4" />
          <span className="text-xs">0</span>
        </div>
        <button
          type="button"
          className="flex items-center space-x-1 transition-colors hover:text-main-text/80"
        >
          <OLinkIcon className="w-4 h-4" />
          <span className="text-xs">공유</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 transition-colors hover:text-main-text/80"
        >
          <OHandThumbUpIcon className="w-4 h-4" />

          <span className="text-xs">0</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 transition-colors hover:text-main-text/80"
        >
          <OHandThumbDownIcon className="w-4 h-4" />
          <span className="text-xs">0</span>
        </button>
      </div>
    </section>
  );
};

export default PostInfo;
