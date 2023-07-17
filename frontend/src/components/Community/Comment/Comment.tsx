import { useState } from "react";
import { useForm } from "react-hook-form";

import { timeFormat } from "@src/libs";

import { useGetMe } from "@src/query/useGetMe";

import Avatar from "@src/components/Common/Avatar";
import FormToolkit from "@src/components/FormToolkit";

import type { ApiFindManyCommentResponse } from "@src/types/apis";
import { useUpdateComment } from "@src/query/useUpdateComment";

interface CommentUpdateForm {
  content: string;
}

type Props = ApiFindManyCommentResponse[0];

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

  return (
    <li className="my-box space-y-2 w-full">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <Avatar {...user} />
          <time className="text-xxs text-gray-300 before:content-['·'] before:px-1.5 before:text-base">
            {timeFormat(createdAt)}
          </time>
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
    </li>
  );
};

export default Comment;
