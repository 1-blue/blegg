import { type Variants, motion } from "framer-motion";

const variants: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: (n: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: n * 0.4,
      ease: "easeInOut",
    },
  }),
};

interface Props {
  custom: number;
  main: string;
  sub?: string;
}

/** 2023/06/24 - Carousel.Info 에서 사용하는 하나의 텍스트 컴포넌트 - by 1-blue */
const Text: React.FC<Props> = ({ custom, main, sub }) => {
  return (
    <motion.div
      className="space-x-1"
      variants={variants}
      custom={custom}
      initial="initial"
      animate="animate"
    >
      <span className="text-xs lg:text-sm">{main}</span>
      {sub && <span className="text-xs">( {sub} )</span>}
    </motion.div>
  );
};

export default Text;
