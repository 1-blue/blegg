import { useForm } from "react-hook-form";
import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import QUERY_KEYS from "@src/query";

import { apiSignIn } from "@src/apis";

import FormToolkit from "@src/components/FormToolkit";

interface SignInForm {
  id: string;
  password: string;
  nickname: string;
  summonerName: string;
}

const serverURL = import.meta.env.VITE_SERVER_URL;

/** 2023/07/05 - 로그인 페이지 - by 1-blue */
const SignIn: React.FC = () => {
  const queryClient = new QueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  /** 2023/07/07 - 로그인 요청 핸들러 - by 1-blue */
  const signInHandler = handleSubmit(async (body) => {
    try {
      await apiSignIn(body);

      alert("로그인에 성공했습니다.\n메인 페이지로 이동됩니다.");

      // 로그인한 유저 데이터 리패치
      queryClient.invalidateQueries([QUERY_KEYS.ME]);
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) return;

        const { message } = error.response.data;

        alert(message);
      } else {
        console.error("error >> ", error);
      }
    }
  });

  return (
    <>
      <h1 className="text-main-text font-black text-3xl text-center mt-20 mb-8">
        로그인
      </h1>

      <form className="flex flex-col space-y-6" onSubmit={signInHandler}>
        <FormToolkit.Input
          type="text"
          id="아이디"
          placeholder="ex) blegg98"
          // FIXME: 개발용
          defaultValue="1blue"
          error={errors.id?.message}
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
        <FormToolkit.Input
          type="password"
          id="비밀번호"
          placeholder="ex) 123456789a!"
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

        <FormToolkit.Button
          type="submit"
          className="font-bold text-lg"
          label="로그인"
        />

        <div className="grid grid-cols-1 xssm:grid-cols-3 gap-4">
          <a
            href={serverURL + "/auth/kakao"}
            className="px-2 py-3 text-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-main-bg font-bold text-base xl:text-lg text-main-box-bg bg-yellow-400 hover:bg-yellow-400/90 focus:ring-yellow-400"
          >
            Kakao
          </a>
          <a
            href={serverURL + "/auth/google"}
            className="px-2 py-3 text-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-main-bg font-bold text-base xl:text-lg text-main-box-bg bg-gray-200 hover:bg-gray-200/90 focus:ring-gray-200"
          >
            Google
          </a>
          <a
            href={serverURL + "/auth/naver"}
            className="px-2 py-3 text-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-main-bg font-bold text-base xl:text-lg bg-green-500 hover:bg-green-500/90 focus:ring-green-500"
          >
            Naver
          </a>
        </div>
      </form>
    </>
  );
};

export default SignIn;
