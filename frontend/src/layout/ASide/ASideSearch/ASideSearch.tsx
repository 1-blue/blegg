import { useEffect, useState } from "react";
import { MagnifyingGlassIcon as SMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";

import useClickOutside from "@src/hooks/useClickOutside";

import AutoComplete from "@src/components/Common/AutoComplete";

interface SearchForm {
  searchWord: string;
}
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

/** 2023/06/20 - 사이드바 검색 컴포넌트 - by 1-blue */
const ASideSearch: React.FC<Props> = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SearchForm>();

  /** 2023/06/30 - 최근 검색어 - by 1-blue */
  const [recentWords, setRecentWords] = useState<string[]>([]);
  /** 2023/06/30 - 최근 검색어 불러오기 - by 1-blue */
  useEffect(() => {
    const words = JSON.parse(localStorage.getItem("recentWords") || "[]");

    if (!Array.isArray(words)) return setRecentWords([]);

    setRecentWords(words);
  }, []);
  /** 2023/06/30 - 모든 최근 검색어 지우기 - by 1-blue */
  const onClaerAllRecentWords = () => {
    localStorage.removeItem("recentWords");
    setRecentWords([]);
  };
  /** 2023/06/30 - 특정 최근 검색어 지우기 - by 1-blue */
  const onClaerOneRecentWords = (word: string) => {
    const words = recentWords.filter((recentWord) => recentWord !== word);

    localStorage.setItem("recentWords", JSON.stringify(words));
    setRecentWords(words);
  };

  /** 2023/06/30 - 검색 - by 1-blue */
  const onSearch: React.FormEventHandler<HTMLFormElement> = handleSubmit(
    ({ searchWord }) => {
      // 최근 검색어에 없다면
      if (!recentWords.includes(searchWord)) {
        // localStorage에 등록
        localStorage.setItem(
          "recentWords",
          JSON.stringify([...recentWords, searchWord])
        );
        // state에 등록
        setRecentWords((prev) => [...prev, searchWord]);
      }

      // input reset
      reset({ searchWord: "" });
    }
  );

  /** 2023/06/30 - 검색창에 포커싱 여부 ( + form 내부를 클릭하는지 여부 ) - by 1-blue */
  const [isFocus, setIsFocus] = useState(false);
  const [formRef] = useClickOutside<HTMLFormElement>({
    onOpen: () => setIsFocus(true),
    onClose: () => setIsFocus(false),
  });

  // 현재 작성중인 검색어
  const searchWord = watch("searchWord");

  return (
    <section className="bg-main-bg p-8 border-b border-main-line">
      {/* error message */}
      {errors.searchWord && (
        <span className="text-red-500 text-xs">
          {errors.searchWord.message}
        </span>
      )}

      {/* form */}
      <form
        onSubmit={onSearch}
        ref={formRef}
        className={twMerge(
          "relative px-3 py-2 flex bg-main-box-bg border border-main-line rounded-sm transition-colors hover:border-main-300",
          isFocus && "border-main-500 hover:border-main-500"
        )}
      >
        <input
          {...register("searchWord", {
            minLength: { message: "** 두 글자 이상 입력해주세요 **", value: 2 },
          })}
          type="search"
          placeholder="ex) Akaps"
          className="flex-1 px-2 py-1 bg-transparent w-11/12 text-sm placeholder:text-main-text placeholder:text-sm focus:outline-none"
          {...props}
        />
        <button type="submit" className="group focus:outline-none">
          <SMagnifyingGlassIcon
            className={twMerge(
              "w-5 h-5 text-main-text transition-colors hover:text-main-500 group-focus-within:text-main-500",
              isFocus && "text-main-400"
            )}
          />
        </button>

        {/* 최근/추천 검색어 */}
        <AutoComplete
          isShow={isFocus && !!recentWords.length}
          // 작성하지 않았으면 최근 검색어 / 작성했으면 최근 검색어중에 포함하는 것만 렌더링
          items={
            searchWord
              ? recentWords.filter((v) => v.includes(searchWord))
              : recentWords
          }
          onClearOne={onClaerOneRecentWords}
          onClearAll={onClaerAllRecentWords}
        />
      </form>
    </section>
  );
};

export default ASideSearch;
