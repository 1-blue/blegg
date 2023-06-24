import { AnimatePresence, motion } from "framer-motion";

interface Props {
  /** 공간을 채울 비율 ( 0 ~ 100 ) */
  percent: number;
}

const ProgressBar: React.FC<Props> = ({ percent }) => {
  return (
    <AnimatePresence initial={true}>
      <section className="w-full h-2 lg:h-3 bg-white">
        <motion.div
          className="w-0 h-2 lg:h-3 bg-main-600"
          initial={{ width: "0%" }}
          animate={{
            opacity: 1,
            width: `${percent}%`,
            transition: { delay: 0.4, duration: 2, ease: "easeInOut" },
          }}
        />
      </section>
    </AnimatePresence>
  );
};

export default ProgressBar;
