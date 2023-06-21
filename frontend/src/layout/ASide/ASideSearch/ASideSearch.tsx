import { useState } from "react";
import { MagnifyingGlassIcon as SMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

/** 2023/06/20 - 사이드바 검색 컴포넌트 - by 1-blue */
const ASideSearch: React.FC<Props> = ({ ...props }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <section className="bg-main-bg p-8 border-b border-main-line">
      <form
        className={twMerge(
          "px-3 py-2 flex space-x-1 bg-main-box-bg border border-main-line rounded-sm transition-colors hover:border-main-300",
          isFocus && "border-main-500 hover:border-main-500"
        )}
      >
        <input
          type="search"
          placeholder="ex) Akaps"
          className="flex-1 px-2 py-1 bg-transparent w-11/12 text-sm placeholder:text-main-text placeholder:text-sm focus:outline-none"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
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
      </form>
    </section>
  );
};

export default ASideSearch;
