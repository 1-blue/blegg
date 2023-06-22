import { AnimatePresence, motion, type Variants } from "framer-motion";

interface Props {
  /** 툴팁을 보여줄지 여부 ( 실제로는 마우스 이벤트에 의해 결정됨 ) */
  show: boolean;
  /** 스킬 이름 */
  title: string;
  /** 스킬 설명 */
  description: string;
}

const variants: Variants = {
  initial: {
    x: "-50%",
    y: 20,
    opacity: 0,
  },
  animate: {
    x: "-50%",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    x: "-50%",
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/** 2023/06/22 - 스킬 툴팁 컴포넌트 - by 1-blue */
const Tooltip: React.FC<Props> = ({ show, title, description }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute bottom-[110%] left-1/2 w-[300px] -translate-x-1/2 text-left px-4 py-2 space-y-2 bg-gray-700 rounded-md"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h4 className="text-main-text font-bold">{title}</h4>
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
