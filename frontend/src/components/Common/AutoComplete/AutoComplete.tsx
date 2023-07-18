import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants: Variants = {
  initial: { opacity: 0, y: "90%" },
  animate: { opacity: 1, y: "101%" },
  exit: { opacity: 0, y: "110%" },
};

interface Props {
  /** 이동할 URL */
  baseURL: string;
  /** 렌더링 여부 */
  isShow: boolean;
  /** 렌더링할 요소 */
  items: string[];
  /** 특정 최근 검색어 제거 이벤트 */
  onClearOne?: (item: string) => void;
  /** 모든 최근 검색어 제거 이벤트 */
  onClearAll?: () => void;
  /** 첨부할 query-string */
  queryString?: string;
}

/** 2023/06/30 - 추천/최근 검색어 자동완성 - by 1-blue */
const AutoComplete: React.FC<Props> = ({
  baseURL,
  queryString,
  isShow,
  items,
  onClearOne,
  onClearAll,
}) => {
  return (
    <AnimatePresence>
      {isShow && (
        <motion.section
          className="max-h-[360px] overflow-y-auto scroll absolute left-0 bottom-0 text-sm bg-main-search w-full rounded-b-md flex flex-col justify-center border-main-line border z-[2]"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {items.map((item) => (
            <Link
              key={item}
              to={`${baseURL}?q=${item}${queryString ? `&${queryString}` : ""}`}
              replace
              className="flex justify-between items-center cursor-pointer transition-colors hover:bg-main-search-hover border-b border-main-line"
              data-type="close"
            >
              <span className="pl-4 py-3" data-type="close">
                {item}
              </span>
              {onClearOne && (
                <button
                  type="button"
                  className="group p-4 transition-all hover:text-main-text"
                  onClick={(e) => {
                    e.preventDefault();

                    onClearOne(item);
                  }}
                >
                  <XMarkIcon className="w-5 h-5 stroke-2 transition-all group-hover:stroke-[3px]" />
                </button>
              )}
            </Link>
          ))}
          {onClearAll && (
            <button
              type="button"
              className="p-3 text-xs transition-colors hover:bg-main-search-hover"
              onClick={onClearAll}
            >
              최근 검색어 지우기
            </button>
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AutoComplete;
