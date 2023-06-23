import { AnimatePresence, Variants, motion } from "framer-motion";

interface Props {
  /** 렌더링 여부 */
  show: boolean;
  /** 닫는 함수 */
  onCloseOverlay: () => void;
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

/** 2023/06/22 - 전체 영역 검정(80%) 배경 - by 1-blue */
const Overlay: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  show,
  onCloseOverlay,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.article
          onClick={onCloseOverlay}
          className="fixed inset-0 bg-black/80 flex justify-center items-center"
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

export default Overlay;
