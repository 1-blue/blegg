import Avatar from "../Avatar";
import Square from "../Square";

/** 2023/07/16 - "Comment" Skeleton UI - by 1-blue */
const Comment = () => {
  return (
    <div className="my-box space-y-2">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Avatar />
          <span className="text-gray-400">·</span>
          <Square className="w-12 h-4" />
        </div>
      </div>
      <Square className="w-2/3 h-5" />
      <Square className="w-1/2 h-5" />
    </div>
  );
};

export default Comment;
