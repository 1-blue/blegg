import { useState } from "react";
import { useForm } from "react-hook-form";

import { timeFormat } from "@src/libs";

import { useGetMe } from "@src/query/useGetMe";
import { useUpdateReply } from "@src/query/useUpdateReply";

import Avatar from "@src/components/Common/Avatar";
import FormToolkit from "@src/components/FormToolkit";

import type { ApiFindManyReplyResponse } from "@src/types/apis";

interface ReplyUpdateForm {
  content: string;
}

type Props = ApiFindManyReplyResponse[0];

/** 2023/07/18 - 답글 컴포넌트 - by 1-blue */
const Reply: React.FC<Props> = ({
  idx,
  content,
  createdAt,
  user,
  postIdx,
  commentIdx,
}) => {
  const { me } = useGetMe();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReplyUpdateForm>({
    defaultValues: { content },
  });

  /** 2023/07/18 - 수정중인지 여부 - by 1-blue */
  const [isUpdate, setIsUpdate] = useState(false);

  /** 2023/07/18 - 답글 수정 뮤테이트 - by 1-blue */
  const updateReplyMutate = useUpdateReply({
    replyIdx: idx,
    commentIdx,
    postIdx,
  });
  const onUpdateReply = handleSubmit(({ content }) => {
    updateReplyMutate({ content });
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
            <form className="flex items-center" onSubmit={onUpdateReply}>
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
                data-reply-idx={idx}
                className="text-xs text-gray-300 transition-colors hover:text-gray-100 before:content-['·'] before:px-1.5 before:text-base"
              >
                삭제
              </button>
            </div>
          ))}
      </div>
      {isUpdate ? (
        <FormToolkit.Textarea
          id="답글 수정"
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

export default Reply;
