import { AnimatePresence, type Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface Props {
  /** 캡션 */
  caption?: string;
  /** 공간을 채울 비율 ( 0 ~ 100 ) */
  percent: number;
  /** TailwindCss className */
  className?: string;
}

/** 2023/06/26 - 애니메이션이 적용된 ProgressBar 컴포넌트 - by 1-blue */
const ProgressBar: React.FC<Props> = ({ caption, percent, className }) => {
  return (
    <AnimatePresence initial={true}>
      <motion.article className="w-full" variants={variants}>
        <section className="flex flex-col items-center">
          {caption && <span className="self-start">{caption}</span>}
          <div className="w-full bg-white">
            <motion.div
              className={twMerge("w-0 h-2 lg:h-3 bg-main-600", className)}
              initial={{ width: "0%" }}
              animate={{
                opacity: 1,
                width: `${percent}%`,
                transition: { delay: 0.4, duration: 2, ease: "easeInOut" },
              }}
            />
          </div>
        </section>
      </motion.article>
    </AnimatePresence>
  );
};

export default ProgressBar;
