import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios, { isAxiosError } from "axios";

import { useGetMe } from "@src/query";
import { useUpdateMe } from "@src/query/useUpdateMe";

import { apiGetPresignedURL } from "@src/apis";

import FormToolkit from "@src/components/FormToolkit";

import type { User } from "@src/types";

interface ProfileUpdateForm
  extends Partial<Pick<User, "nickname" | "summonerName">> {}
interface ProfileUpdateAxiosError {
  message: string;
  type: "nickname" | "summonerName";
}

/** 2023/07/19 - 프로필 수정 페이지 - by 1-blue */
const ProfileUpdater: React.FC = () => {
  const { me } = useGetMe();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<ProfileUpdateForm>();

  const { mutate: updateMeMutate, error } = useUpdateMe();

  /** 2023/07/19 - 이미지 - by 1-blue */
  const [avatarFile, setAvatarFile] = useState<null | FileList>(null);

  /** 2023/07/19 - 유저 정보 수정 핸들러 - by 1-blue */
  const onUpdateMe = handleSubmit(async (body) => {
    let avatar = me?.avatar;

    // 아바타 S3에 등록
    if (avatarFile) {
      const file = avatarFile[0];
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

      avatar = fields.key;
    }

    updateMeMutate({
      ...body,
      avatar,
    });
  });

  /** 2023/07/19 - 에러 체크 - by 1-blue */
  useEffect(() => {
    if (!error) return;

    if (isAxiosError<ProfileUpdateAxiosError>(error)) {
      if (!error.response) return;

      const { message, type } = error.response.data;

      alert(message);

      setError(type, { message }, { shouldFocus: true });
    } else {
      console.error("error >> ", error);
    }
  }, [error, setError]);

  return (
    <form className="flex flex-col space-y-6" onSubmit={onUpdateMe}>
      <FormToolkit.SingleImage
        id="아바타"
        setImage={setAvatarFile}
        imageURL={me?.avatar}
      />
      <FormToolkit.Input
        type="text"
        id="닉네임"
        placeholder="ex) Akaps ( blegg에서 사용할 별칭 )"
        required
        defaultValue={me?.nickname}
        error={errors.nickname?.message}
        {...register("nickname", {
          required: { value: true, message: "닉네임을 입력해주세요!" },
          minLength: { value: 2, message: "최소 2자를 입력해주세요!" },
          maxLength: { value: 9, message: "최대 9자를 입력해주세요!" },
        })}
      />
      <FormToolkit.Input
        type="text"
        id="소환사 이름"
        placeholder="ex) Akaps"
        defaultValue={me?.summonerName || ""}
        info="소환사의 아이콘이 프로필 이미지가 됩니다. 입력하지 않으면 기본 이미지를 사용합니다."
        error={errors.summonerName?.message}
        {...register("summonerName")}
      />
      <FormToolkit.Button type="submit" label="수정" />
    </form>
  );
};

export default ProfileUpdater;
