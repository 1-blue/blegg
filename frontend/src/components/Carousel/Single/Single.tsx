import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import Arrow from "@src/components/Carousel/Arrow";

const variants: Variants = {
  initial: (dir: boolean) => ({
    zIndex: -1,
    position: "relative",
    x: dir ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    zIndex: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: (dir: boolean) => ({
    zIndex: -1,
    position: "absolute",
    x: dir ? "-100%" : "100%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface Props {
  /** Carousel에서 사용할 이미지 경로 */
  src?: string;
  /** Carousel의 요소를 구분할 key ( key가 달라야 새로운 컴포넌트로 인식해서 animation이 발생함 ) */
  uniqueKey: string;
  /** 다음 이미지 이동 함수 */
  next: () => void;
  /** 이전 이미지 이동 함수 */
  prev: () => void;
}

/** 2023/06/23 - 단일 Carousel - by 1-blue */
const Single: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  src,
  uniqueKey,
  next,
  prev,
}) => {
  /** 2023/06/23 - carousel 이동 방향 - by 1-blue */
  const [dir, setDir] = useState(true);

  /** 2023/06/23 - prev || next click event handler - by 1-blue */
  const onClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!(e.target instanceof SVGElement)) return;
    if (!e.target.dataset.type) return;

    e.stopPropagation();

    const { type } = e.target.dataset;

    // 이전
    if (type === "prev") {
      setDir(false);
      prev();
    }
    // 다음
    if (type === "next") {
      setDir(true);
      next();
    }
  };

  return (
    <article className="relative mb-10 -mt-6 -mx-6">
      <AnimatePresence initial={false} custom={dir}>
        <motion.figure
          key={uniqueKey}
          className="relative w-full max-w-[1024px] mx-auto"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={dir}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            // 이전
            if (swipe > swipeConfidenceThreshold) {
              setDir(false);
              prev();
            }
            // 다음
            if (swipe < -swipeConfidenceThreshold) {
              setDir(true);
              next();
            }
          }}
        >
          {src && <motion.img src={src} className="pointer-events-none" />}

          {children}
        </motion.figure>
      </AnimatePresence>

      <section onClick={onClick}>
        <Arrow />
      </section>
    </article>
  );
};

export default Single;
