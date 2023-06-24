import { type Variants, motion, AnimatePresence } from "framer-motion";

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: -80,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
};

interface Props {
  /** 메인 텍스트 */
  main: string;
  /** 서브 텍스트 */
  sub?: string;
}

/** 2023/06/24 - Carousel Caption 컴포넌트 - by 1-blue  */
const Caption: React.FC<Props> = ({ main, sub }) => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <span className="text-xl lg:text-3xl font-black">{main}</span>
        <span className="text-sm lg:text-lg">( {sub} )</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Caption;
