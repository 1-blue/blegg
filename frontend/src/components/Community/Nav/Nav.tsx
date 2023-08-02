import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  CalendarDaysIcon as OCalendarDaysIcon,
  CursorArrowRaysIcon as OCursorArrowRaysIcon,
  FireIcon as OFireIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon as SCalendarDaysIcon,
  CursorArrowRaysIcon as SCursorArrowRaysIcon,
  FireIcon as SFireIcon,
} from "@heroicons/react/24/solid";

import FormToolkit from "@src/components/FormToolkit";

import type { SortBy } from "@src/types";

interface SortOption {
  label: string;
  type: SortBy;
  icons: [React.ReactNode, React.ReactNode];
}
const sortOptions: SortOption[] = [
  {
    label: "최신순",
    type: "recent",
    icons: [
      <OCalendarDaysIcon className="w-7 h-7" />,
      <SCalendarDaysIcon className="w-7 h-7" />,
    ],
  },
  {
    label: "조회순",
    type: "viewed",
    icons: [
      <OCursorArrowRaysIcon className="w-7 h-7" />,
      <SCursorArrowRaysIcon className="w-7 h-7" />,
    ],
  },
  {
    label: "인기순",
    type: "popular",
    icons: [
      <OFireIcon className="w-7 h-7" />,
      <SFireIcon className="w-7 h-7" />,
    ],
  },
];

/** 2023/07/12 - 게시글 정렬 && 게시글 검색 - by 1-blue */
const Nav: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<SortBy>("recent");
  const params = useSearchParams()[0];

  /** 2023/07/12 - 검색 조건에 대한 query-string이 없거나 잘못되었다면 리다이렉트 - by 1-blue */
  useEffect(() => {
    const sortBy = params.get("s");

    if (!sortBy) return navigate("/community?s=recent", { replace: true });
    if (!sortOptions.find(({ type }) => type === sortBy)) {
      return navigate("/community?s=recent", { replace: true });
    }

    setSortBy(sortBy as SortBy);
  }, [params, navigate]);

  const searchWord = params.get("q");

  return (
    <article className="sticky top-28 z-[3] min-w-[320px] flex justify-between mb-6 p-4 bg-main-box-bg border border-main-line rounded-md flex-col shadow-xl shadow-main-bg lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 md:top-2">
      {/* 게시글 정렬 */}
      <section className="flex items-center space-x-4">
        {sortOptions.map(({ icons, label, type }) => (
          <Link
            key={type}
            to={
              searchWord
                ? `/community?s=${type}&q=${searchWord}`
                : `/community?s=${type}`
            }
            className={twMerge(
              "flex space-x-1 text-main-text transition-colors hover:text-main-500",
              type === sortBy && "text-main-400"
            )}
          >
            {type === sortBy ? icons[1] : icons[0]}
            <span className="text-lg leading-[1.9]">{label}</span>
          </Link>
        ))}
      </section>

      {/* 게시글 검색 */}
      <FormToolkit.SearchInput
        baseURL="/community"
        queryString={`s=${sortBy}`}
        wrapperClassName="p-0 border-0"
        placeholder="ex) LCK 근황"
      />
    </article>
  );
};

export default Nav;
