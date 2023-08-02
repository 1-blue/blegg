import { AnimatePresence, type Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  /** TailwindCss className */
  className?: string;
}

const variants: Variants = {
  initial: {
    opacity: 0.01,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/** 2023/06/24 - ( absolute ) 배경 씌우는 컴포넌트 - by 1-blue */
const Absolute: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <AnimatePresence>
      <motion.article
        className={twMerge("absolute inset-0", className)}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.article>
    </AnimatePresence>
  );
};

export default Absolute;
