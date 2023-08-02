import {
  EyeIcon as OEyeIcon,
  HandThumbUpIcon as OHandThumbUpIcon,
  HandThumbDownIcon as OHandThumbDownIcon,
  LinkIcon as OLinkIcon,
} from "@heroicons/react/24/outline";
import {
  HandThumbUpIcon as SHandThumbUpIcon,
  HandThumbDownIcon as SHandThumbDownIcon,
} from "@heroicons/react/24/solid";

import { useGetMe, useHateOfPost, useLikeOfPost } from "@src/query";

import Avatar from "@src/components/Common/Avatar/Avatar";

import type { ApiFindOnePostResponse } from "@src/types/apis";

interface Props
  extends Pick<
    ApiFindOnePostResponse,
    "idx" | "viewCount" | "user" | "ratingOfUsers"
  > {}

/** 2023/07/13 - 게시글 정보 ( 유저/조회수/평가 ) 및 평가 컴포넌트 - by 1-blue */
const PostInfo: React.FC<Props> = ({ idx, viewCount, user, ratingOfUsers }) => {
  const { me } = useGetMe();

  const likeOfPostMutate = useLikeOfPost({ idx });
  const hateOfPostMutate = useHateOfPost({ idx });

  /** 2023/07/13 - 게시글 좋아요 클릭 이벤트 핸들러 - by 1-blue */
  const onClickLike = () => likeOfPostMutate({ idx });
  /** 2023/07/13 - 게시글 싫어요 클릭 이벤트 핸들러 - by 1-blue */
  const onClickHate = () => hateOfPostMutate({ idx });

  /** 2023/07/13 - 게시글 좋아요 개수 - by 1-blue */
  const likeCount = ratingOfUsers.filter((v) => v.isLike).length;
  /** 2023/07/13 - 게시글 싫어요 개수 - by 1-blue */
  const hateCount = ratingOfUsers.length - likeCount;
  /** 2023/07/13 - 게시글에 좋아요 눌렀는지 여부 - by 1-blue */
  const isLiked = !!ratingOfUsers.find(
    (v) => v.isLike === true && v.userIdx === me?.idx
  );
  /** 2023/07/13 - 게시글에 싫어요 눌렀는지 여부 - by 1-blue */
  const isHated = !!ratingOfUsers.find(
    (v) => v.isLike === false && v.userIdx === me?.idx
  );

  return (
    <section className="flex justify-between">
      <Avatar {...user} />

      <div
        className="grid gap-1 grid-cols-2 place-items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-1">
          <OEyeIcon className="w-4 h-4" />
          <span className="text-xs">{viewCount}</span>
        </div>
        <button
          type="button"
          className="flex items-center space-x-1 transition-colors hover:text-main-text/80"
          onClick={() =>
            navigator.clipboard
              .writeText(window.location.origin + `/community/${idx}`)
              .then(() => alert("게시글 링크를 복사했습니다."))
          }
        >
          <OLinkIcon className="w-4 h-4" />
          <span className="text-xs whitespace-nowrap">공유</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 transition-colors hover:text-main-text/80"
          onClick={onClickLike}
        >
          {isLiked ? (
            <SHandThumbUpIcon className="w-4 h-4" />
          ) : (
            <OHandThumbUpIcon className="w-4 h-4" />
          )}
          <span className="text-xs">{likeCount}</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 transition-colors hover:text-main-text/80"
          onClick={onClickHate}
        >
          {isHated ? (
            <SHandThumbDownIcon className="w-4 h-4" />
          ) : (
            <OHandThumbDownIcon className="w-4 h-4" />
          )}
          <span className="text-xs">{hateCount}</span>
        </button>
      </div>
    </section>
  );
};

export default PostInfo;
