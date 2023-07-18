import { useForm } from "react-hook-form";

import { useCreateComment } from "@src/query/useCreateComment";
import { useCreateReply } from "@src/query/useCreateReply";

import FormToolkit from "@src/components/FormToolkit";

interface CommentFormType {
  content: string;
}

interface Props {
  /** 게시글 식별자 */
  postIdx: number;

  /** 댓글 식별자 */
  commentIdx?: number;
}

/** 2023/07/17 - 댓글/답글 작성 폼 - by 1-blue */
const CommentForm: React.FC<Props> = ({ postIdx, commentIdx }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormType>();

  const createCommentMutate = useCreateComment({ postIdx });
  const createReplyMutate = useCreateReply({
    postIdx,
    commentIdx: commentIdx || -1,
  });

  /** 2023/07/16 - 댓글 or 답글 생성 이벤트 핸들러 - by 1-blue */
  const onSubmit = handleSubmit(({ content }) => {
    // 답글 작성
    if (commentIdx) createReplyMutate({ content });
    // 댓글 작성
    else createCommentMutate({ content });

    reset();
  });

  return (
    <form className="my-box mt-6 flex space-x-3" onSubmit={onSubmit}>
      <FormToolkit.Textarea
        id="댓글"
        placeholder="댓글을 입력해주세요!"
        labelHidden
        className="placeholder:py-1"
        error={errors.content?.message}
        {...register("content", {
          required: {
            value: true,
            message: "내용을 입력해주세요!",
          },
        })}
      />

      <FormToolkit.Button label="생성" type="submit" />
    </form>
  );
};

export default CommentForm;
