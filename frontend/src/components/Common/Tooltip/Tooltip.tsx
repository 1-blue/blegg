import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  /** 툴팁을 보여줄지 여부 ( 실제로는 마우스 이벤트에 의해 결정됨 ) */
  show: boolean;
  /** 스킬 이름 */
  title: string;
  /** 스킬 설명 */
  description: string;
  /** 보여줄 가로 방향 */
  horizon?: "left" | "center" | "right";
  /** 보여줄 세로 방향 */
  vertical?: "top" | "center" | "bottom";
}

/** 2023/06/22 - 스킬 툴팁 컴포넌트 - by 1-blue */
const Tooltip: React.FC<Props> = ({
  show,
  title,
  description,
  horizon = "center",
  vertical = "top",
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={twMerge(
            "absolute w-[300px] px-4 py-2 space-y-2 bg-gray-700 rounded-md z-[1]",
            horizon === "left" && "left-0",
            horizon === "center" && "left-1/2", // -translate-x-1/2
            horizon === "right" && "right-0",
            vertical === "top" && "bottom-[110%]",
            vertical === "center" && "bottom-1/2", // translate-y-1/2
            vertical === "bottom" && "top-[110%]"
          )}
          initial={{
            x: horizon === "center" ? "-50%" : 0,
            y: vertical === "center" ? "70%" : 20,
            opacity: 0,
          }}
          animate={{
            x: horizon === "center" ? "-50%" : "0",
            y: vertical === "center" ? "50%" : "0",
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          exit={{
            x: horizon === "center" ? "-50%" : 0,
            y: vertical === "center" ? "70%" : 20,
            opacity: 0,
            transition: { duration: 0.4 },
          }}
        >
          <h4 className="text-main-text font-bold">{title}</h4>
          <p
            className="text-sm whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
