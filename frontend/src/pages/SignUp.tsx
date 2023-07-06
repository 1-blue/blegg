import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  EyeIcon as SEyeIcon,
  EyeSlashIcon as SEyeSlashIcon,
} from "@heroicons/react/24/solid";
import { isAxiosError } from "axios";

import { apiSignUp } from "@src/apis";

import FormToolkit from "@src/components/FormToolkit";

import type { ApiSignUpRequest } from "@src/types/apis/auth";

interface SignUpAxiosError {
  message: string;
  type: "id" | "nickname" | "summonerName";
}

/** 2023/07/05 - 회원가입 페이지 - by 1-blue */
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ApiSignUpRequest>();

  /** 2023/07/06 - 비밀번호 보이기 - by 1-blue */
  const [isVisible, setIsVisible] = useState(false);

  /** 2023/07/05 - 회원가입 요청 핸들러 - by 1-blue */
  const signUpHandler = handleSubmit(async (body) => {
    try {
      await apiSignUp(body);
    } catch (error) {
      if (isAxiosError<SignUpAxiosError>(error)) {
        if (!error.response) return;

        const { message, type } = error.response.data;

        alert(message);

        setError(type, { message }, { shouldFocus: true });
      } else {
        console.error("error >> ", error);
      }
    }
  });

  return (
    <>
      <h1 className="text-main-text font-black text-3xl text-center mt-20 mb-8">
        회원가입
      </h1>

      <form className="flex flex-col space-y-6" onSubmit={signUpHandler}>
        <FormToolkit.Input
          type="text"
          id="아이디"
          placeholder="ex) blegg98"
          required
          error={errors.id?.message}
          // FIXME: 개발용
          defaultValue="1blue"
          {...register("id", {
            required: { value: true, message: "아이디를 입력해주세요!" },
            minLength: { value: 4, message: "최소 4자를 입력해주세요!" },
            maxLength: { value: 20, message: "최대 20자를 입력해주세요!" },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/,
              message:
                "알파벳과 숫자를 하나 이상 입력하고 그 이외의 문자는 입력할 수 없습니다!",
            },
          })}
        />
        <div className="relative">
          <FormToolkit.Input
            type={isVisible ? "text" : "password"}
            id="비밀번호"
            placeholder="ex) 123456789a!"
            required
            // FIXME: 개발용
            defaultValue="123456789a!"
            error={errors.password?.message}
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해주세요!" },
              minLength: { value: 8, message: "최소 8자를 입력해주세요!" },
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
                message:
                  "알파벳, 숫자, 특수문자를 하나 이상 입력하고 그 이외의 문자는 입력할 수 없습니다!",
              },
            })}
          />

          {isVisible ? (
            <SEyeSlashIcon
              role="button"
              className="absolute w-6 h-6 bottom-2 right-2"
              onClick={() => setIsVisible(false)}
            />
          ) : (
            <SEyeIcon
              role="button"
              className="absolute w-6 h-6 bottom-2 right-2"
              onClick={() => setIsVisible(true)}
            />
          )}
        </div>
        <FormToolkit.Input
          type="text"
          id="닉네임"
          placeholder="ex) Akaps ( blegg에서 사용할 별칭 )"
          required
          // FIXME: 개발용
          defaultValue="Akaps"
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
          info="소환사의 아이콘이 프로필 이미지가 됩니다. 입력하지 않으면 기본 이미지를 사용합니다."
          {...register("summonerName")}
        />

        <FormToolkit.Button
          type="submit"
          className="font-bold text-lg"
          label="회원가입"
        />
      </form>
    </>
  );
};

export default SignUp;
