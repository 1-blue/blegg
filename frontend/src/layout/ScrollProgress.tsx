import { motion, useScroll, useSpring } from "framer-motion";

/** 2023/06/20 - 스크롤 진행표시줄 컴포넌트 - by 1-blue */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left z-10 h-2 bg-indigo-400"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
