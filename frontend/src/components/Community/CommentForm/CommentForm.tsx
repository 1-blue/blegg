import { useForm } from "react-hook-form";

import { useCreateComment } from "@src/query/useCreateComment";

import FormToolkit from "@src/components/FormToolkit";

interface CommentFormType {
  content: string;
}

interface Props {
  /** 게시글 식별자 */
  postIdx: number;
}

/** 2023/07/17 - 댓글 작성 폼 - by 1-blue */
const CommentForm: React.FC<Props> = ({ postIdx }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormType>();

  const createCommentMutate = useCreateComment({ postIdx });

  /** 2023/07/16 - 댓글 생성 이벤트 핸들러 - by 1-blue */
  const onSubmit = handleSubmit(({ content }) => {
    createCommentMutate({ content });

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
