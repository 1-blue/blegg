import { useState } from "react";
import { useForm } from "react-hook-form";

import { timeFormat } from "@src/libs";

import {
  useGetMe,
  useUpdateComment,
  useFindManyReply,
  useDeleteReply,
} from "@src/query";

import Avatar from "@src/components/Common/Avatar";
import FormToolkit from "@src/components/FormToolkit";
import CommentForm from "@src/components/Community/CommentForm";
import Reply from "@src/components/Community/Reply";
import Skeleton from "@src/components/Common/Skeleton";

import type { ApiFindManyCommentResponse } from "@src/types/apis";

interface CommentUpdateForm {
  content: string;
}

type Props = ApiFindManyCommentResponse[0];

/** 2023/07/17 - 댓글 컴포넌트 - by 1-blue */
const Comment: React.FC<Props> = ({
  idx,
  content,
  createdAt,
  user,
  postIdx,
}) => {
  const { me } = useGetMe();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentUpdateForm>({
    defaultValues: { content },
  });

  /** 2023/07/17 - 수정중인지 여부 - by 1-blue */
  const [isUpdate, setIsUpdate] = useState(false);

  /** 2023/07/17 - 댓글 수정 뮤테이트 - by 1-blue */
  const updateCommentMutate = useUpdateComment({ commentIdx: idx, postIdx });
  const onUpdateComment = handleSubmit(({ content }) => {
    updateCommentMutate({ content });
    setIsUpdate(false);
  });

  const { replies, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useFindManyReply({
      postIdx,
      commentIdx: idx,
      start: -1,
      count: 20,
    });

  /** 2023/07/18 - 답글 입력중 여부 - by 1-blue */
  const [isReply, setIsReply] = useState(false);

  /** 2023/07/18 - 답글 열기/닫기 - by 1-blue */
  const [isShow, setIsShow] = useState(false);

  const deleteReplyMutate = useDeleteReply();

  /** 2023/07/18 - 답글 삭제 핸들러 ( 버블링 ) - by 1-blue  */
  const onDeleteReply: React.MouseEventHandler<HTMLUListElement> = ({
    target,
  }) => {
    if (!(target instanceof HTMLButtonElement)) return;

    if (!target.dataset.type) return;
    if (!target.dataset.replyIdx) return;

    const { type, replyIdx } = target.dataset;

    // 댓글 제거
    if (type === "delete") {
      deleteReplyMutate({ postIdx, commentIdx: idx, replyIdx: +replyIdx });
    }
  };

  return (
    <li className="my-box space-y-2 w-full">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <Avatar {...user} />
          <time className="text-xxs text-gray-300 before:content-['·'] before:px-1.5 before:text-base">
            {timeFormat(createdAt)}
          </time>
          <button
            type="button"
            className="text-xs text-gray-300 before:content-['·'] before:px-1.5 before:text-base transition-colors hover:text-gray-100"
            onClick={() => setIsReply((prev) => !prev)}
          >
            답글 {isReply ? "닫기" : "달기"}
          </button>
        </div>
        {me?.idx === user.idx &&
          (isUpdate ? (
            <form className="flex items-center" onSubmit={onUpdateComment}>
              <button
                type="button"
                onClick={() => setIsUpdate(false)}
                className="text-xs text-gray-300 transition-colors hover:text-gray-100"
              >
                수정 취소
              </button>
              <button
                type="submit"
                className="text-xs text-gray-300 transition-colors hover:text-gray-100 before:content-['·'] before:px-1.5 before:text-base"
              >
                수정 완료
              </button>
            </form>
          ) : (
            <div className="flex items-center">
              <button
                type="button"
                className="text-xs text-gray-300 transition-colors hover:text-gray-100"
                onClick={() => setIsUpdate(true)}
              >
                수정
              </button>
              <button
                type="button"
                data-type="delete"
                data-comment-idx={idx}
                className="text-xs text-gray-300 transition-colors hover:text-gray-100 before:content-['·'] before:px-1.5 before:text-base"
              >
                삭제
              </button>
            </div>
          ))}
      </div>

      {isUpdate ? (
        <FormToolkit.Textarea
          id="댓글 수정"
          labelHidden
          error={errors.content?.message}
          {...register("content", {
            required: {
              value: true,
              message: "내용을 입력해주세요!",
            },
          })}
        />
      ) : (
        <p className="whitespace-pre-wrap break-words">{content}</p>
      )}

      {isReply && <CommentForm postIdx={postIdx} commentIdx={idx} />}

      {/* 답글 열기/닫기 */}
      {replies && replies.pages[0].length >= 1 && (
        <button
          type="button"
          className="relative block w-full"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <div className="my-5 h-0.5 bg-gray-500 rounded-full" />
          <span className="absolute top-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-main-box-bg px-4 text-gray-400">
            답글 {isShow ? "닫기" : "열기"}
          </span>
        </button>
      )}

      {/* 답글들 */}
      {isShow && replies && replies.pages[0].length >= 1 && (
        <ul className="space-y-4" onClick={onDeleteReply}>
          {replies.pages.map((page) =>
            page.map((reply) => <Reply key={reply.idx} {...reply} />)
          )}
        </ul>
      )}

      {/* 스켈레톤 */}
      {isFetching && (
        <ul className="mt-4 flex flex-col space-y-4">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Skeleton.Comment key={i} />
            ))}
        </ul>
      )}

      {/* 답글 더 불러오기 */}
      {isShow && hasNextPage && !isLoading && (
        <FormToolkit.Button
          type="button"
          label="답글 더 불러오기"
          onClick={() => fetchNextPage()}
          className="mt-6 text-xs px-3 block ml-auto"
        />
      )}
    </li>
  );
};

export default Comment;
