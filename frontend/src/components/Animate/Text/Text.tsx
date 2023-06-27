import { type Variants, motion } from "framer-motion";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface Props {
  /** 메인 텍스트 */
  main: string;
  /** 서브 텍스트 */
  sub?: string;
}

/** 2023/06/24 - 애니메이션이 적용된 텍스트 컴포넌트 - by 1-blue */
const Text: React.FC<Props> = ({ main, sub }) => {
  return (
    <motion.div className="space-x-1" variants={variants}>
      <span className="text-xs lg:text-sm">{main}</span>
      {sub && <span className="text-xs">( {sub} )</span>}
    </motion.div>
  );
};

export default Text;
