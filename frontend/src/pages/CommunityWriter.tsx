import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { apiGetPresignedURL } from "@src/apis";

import { useCreatePost } from "@src/query/useCreatePost";

import FormToolkit from "@src/components/FormToolkit";

interface PostWriterForm {
  title: string;
  content: string;
}

/** 2023/07/12 - 커뮤니티 생성 페이지 컴포넌트 - by 1-blue */
const CommunityWriter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PostWriterForm>();

  const createPostMutation = useCreatePost();

  /** 2023/07/14 - 이미지 - by 1-blue */
  const [thumbnailFile, setThumbnailFile] = useState<null | FileList>(null);

  /** 2023/07/14 - 게시글 생성 핸들러 - by 1-blue */
  const onSubmit = handleSubmit(async (body) => {
    let thumbnail: string | undefined;

    // 썸네일 S3에 등록
    if (thumbnailFile) {
      const file = thumbnailFile[0];
      const { name, type } = file;

      // presignedURL과 업로드에 필요한 정보 얻기
      const { url, fields } = await apiGetPresignedURL({ name });

      const formData = new FormData();
      Object.entries(fields).forEach(([field, value]) => {
        formData.append(field, value);
      });
      formData.append("Content-Type", type);
      formData.append("file", file);

      // S3에 업로드
      await axios.post(url, formData);

      thumbnail = fields.key;
    }

    // 게시글 생성
    createPostMutation({ ...body, thumbnail });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 썸네일 */}
      <FormToolkit.SingleImage id="썸네일" setImage={setThumbnailFile} />

      {/* 제목 */}
      <FormToolkit.Input
        id="제목"
        required
        error={errors.title?.message}
        {...register("title", {
          required: {
            message: "제목은 필수로 입력해야합니다!",
            value: true,
          },
          minLength: {
            message: "최소 2자를 입력해야합니다!",
            value: 2,
          },
          maxLength: {
            message: "최대 20자까지 입력이 가능합니다!",
            value: 20,
          },
        })}
      />

      {/* 내용 */}
      <FormToolkit.Textarea
        id="내용"
        required
        error={errors.content?.message}
        className="min-h-[120px]"
        {...register("content", {
          required: {
            message: "내용은 필수로 입력해야합니다!",
            value: true,
          },
          minLength: {
            message: "최소 2자를 입력해야합니다!",
            value: 2,
          },
        })}
      />

      {/* 생성버튼 */}
      <FormToolkit.Button
        label="게시글 생성"
        type="submit"
        className="px-4 py-3 block ml-auto text-sm font-bold"
      />
    </form>
  );
};

export default CommunityWriter;
