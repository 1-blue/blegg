import { AnimatePresence, motion, type Variants } from "framer-motion";

const variants: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
      type: "spring",
    },
  },
};

interface Props {
    /** TailwindCss className */
  className?: string;
}

/** 2023/06/25 - 애니메이션을 순차적으로 렌더링하기위한 wrapper 컴포넌트 - by 1-blue */
const Wrapper: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <AnimatePresence initial={true}>
      <motion.section
        variants={variants}
        initial="initial"
        animate="animate"
        className={className}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
};

export default Wrapper;
