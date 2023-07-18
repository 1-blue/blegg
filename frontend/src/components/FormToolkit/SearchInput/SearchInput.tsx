import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon as SMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";

import useRecentSearches from "@src/hooks/useRecentSearches";
import useClickOutside from "@src/hooks/useClickOutside";

import AutoComplete from "@src/components/Common/AutoComplete";

interface SearchForm {
  searchWord: string;
}
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 이동할 기본 URL */
  baseURL: string;
  /** 감싸는 엘리먼트의 className */
  wrapperClassName?: string;
  /** 첨부할 query-string */
  queryString?: string;
}

/** 2023/07/01 - 검색 input 컴포넌트 - by 1-blue */
const SearchInput: React.FC<Props> = ({
  baseURL,
  wrapperClassName,
  queryString,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SearchForm>();

  /** 2023/06/30 - 최근 검색어 - by 1-blue */
  const {
    recentSearches,
    setRecentSearches,
    onClaerOneRecentSearches,
    onClaerAllRecentSearches,
  } = useRecentSearches();

  /** 2023/06/30 - 검색창에 포커싱 여부 ( + form 내부를 클릭하는지 여부 ) - by 1-blue */
  const { containerRef: formRef, isFocus } = useClickOutside<HTMLFormElement>();

  /** 2023/06/30 - 검색 - by 1-blue */
  const onSearch: React.FormEventHandler<HTMLFormElement> = handleSubmit(
    ({ searchWord }) => {
      if (searchWord.trim().length === 0) return;

      // 최근 검색어에 없다면
      if (!recentSearches.includes(searchWord)) {
        // localStorage에 등록
        localStorage.setItem(
          "recentSearches",
          JSON.stringify([...recentSearches, searchWord])
        );
        // state에 등록
        setRecentSearches((prev) => [...prev, searchWord]);
      }

      // input reset
      reset({ searchWord: "" });

      // 이동
      if (queryString) {
        navigate(`${baseURL}?q=${searchWord}&${queryString}`, {
          replace: true,
        });
      } else {
        navigate(`${baseURL}?q=${searchWord}`, { replace: true });
      }
    }
  );

  // 현재 작성중인 검색어
  const searchWord = watch("searchWord");

  return (
    <section
      className={twMerge(
        "relative bg-main-bg p-8 border-b border-main-line",
        wrapperClassName
      )}
    >
      {/* error message */}
      {errors.searchWord && (
        <span className="absolute top-3 left-0 right-0 text-center text-red-500 text-xs">
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
          className={twMerge(
            "flex-1 px-2 py-1 bg-transparent w-11/12 text-sm placeholder:text-main-text placeholder:text-sm focus:outline-none",
            className
          )}
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
          baseURL={baseURL}
          queryString={queryString}
          isShow={isFocus && !!recentSearches.length}
          // 작성하지 않았으면 최근 검색어 / 작성했으면 최근 검색어중에 포함하는 것만 렌더링
          items={
            searchWord
              ? recentSearches.filter((v) => v.includes(searchWord))
              : recentSearches
          }
          onClearOne={onClaerOneRecentSearches}
          onClearAll={onClaerAllRecentSearches}
        />
      </form>
    </section>
  );
};

export default SearchInput;
