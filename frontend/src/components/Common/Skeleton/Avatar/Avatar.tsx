import Square from "../Square";

/** 2023/07/11 - "Avatar" Skeleton UI - by 1-blue */
const Avatar: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Square className="w-10 h-10" />
      <div className="flex flex-col space-y-1">
        <Square className="h-4" />
        <Square className="h-3" />
      </div>
    </div>
  );
};

export default Avatar;
