import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants: Variants = {
  initial: { opacity: 0, y: "90%" },
  animate: { opacity: 1, y: "102%" },
  exit: { opacity: 0, y: "110%" },
};

interface Props {
  /** 렌더링 여부 */
  isShow: boolean;
  /** 렌더링할 요소 */
  items: string[];
  /** 특정 최근 검색어 제거 이벤트 */
  onClearOne?: (item: string) => void;
  /** 모든 최근 검색어 제거 이벤트 */
  onClearAll?: () => void;
}

/** 2023/06/30 - 추천/최근 검색어 자동완성 - by 1-blue */
const AutoComplete: React.FC<Props> = ({
  isShow,
  items,
  onClearOne,
  onClearAll,
}) => {
  return (
    <AnimatePresence>
      {isShow && (
        <motion.section
          className="absolute left-0 bottom-0 mt-0.5 text-sm bg-main-search w-full rounded-b-md overflow-hidden flex flex-col justify-center border-main-line border"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {items.map((item) => (
            <Link
              key={item}
              to={"/"}
              className="flex justify-between items-center px-4 py-3 cursor-pointer transition-colors hover:bg-main-search-hover border-b border-main-line"
            >
              <span>{item}</span>
              {onClearOne && (
                <XMarkIcon
                  className="w-5 h-5"
                  onClick={(e) => {
                    e.preventDefault();

                    onClearOne(item);
                  }}
                />
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
