import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { apiGetPresignedURL } from "@src/apis";

import { useFindOnePost, useUpdatePost } from "@src/query";

import FormToolkit from "@src/components/FormToolkit";
import Skeleton from "@src/components/Common/Skeleton";

interface PostUpdaterForm {
  title: string;
  content: string;
}

/** 2023/07/15 - 커뮤니티 수정 페이지 컴포넌트 - by 1-blue */
const CommunityUpdater = () => {
  const idx = Number(useParams<{ idx: string }>().idx || 0);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<PostUpdaterForm>();

  /** 2023/07/15 - 수정할 게시글 데이터 불러오기 - by 1-blue */
  const { post, isLoading } = useFindOnePost({ idx });
  /** 2023/07/15 - 수정할 게시글 데이터 등록 - by 1-blue */
  useEffect(() => {
    if (!post) return;

    setValue("title", post.title);
    setValue("content", post.content);
  }, [post, setValue]);

  const updatePostMutate = useUpdatePost({ idx });

  /** 2023/07/15 - 이미지 - by 1-blue */
  const [thumbnailFile, setThumbnailFile] = useState<null | FileList>(null);

  /** 2023/07/15 - 게시글 수정 핸들러 - by 1-blue */
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

    // 게시글 수정
    updatePostMutate({ ...body, thumbnail });
  });

  if (isLoading) return <Skeleton.CommunityDetail />;
  if (!isLoading && !post) {
    alert("해당 게시글이 없습니다!");
    return <Navigate to="/community" />;
  }
  if (!post) return <Navigate to="/community" />;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 썸네일 */}
      <FormToolkit.SingleImage
        id="썸네일"
        setImage={setThumbnailFile}
        imageURL={post.thumbnail}
      />

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

      {/* 수정버튼 */}
      <FormToolkit.Button
        label="게시글 수정"
        type="submit"
        className="px-4 py-3 block ml-auto text-sm font-bold"
      />
    </form>
  );
};

export default CommunityUpdater;
