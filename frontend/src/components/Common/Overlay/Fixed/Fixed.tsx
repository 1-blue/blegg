import { useEffect } from "react";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  /** 렌더링 여부 */
  show: boolean;
  /** 닫는 함수 */
  onCloseOverlay: () => void;
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

/** 2023/06/24 - ( fixed ) 배경 씌우는 컴포넌트 - by 1-blue */
const Fixed: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  show,
  onCloseOverlay,
  className,
}) => {
  /** 2023/06/26 - scroll 금지 - by 1-blue */
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.article
          onClick={onCloseOverlay}
          className={twMerge("fixed inset-0", className)}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Fixed;
