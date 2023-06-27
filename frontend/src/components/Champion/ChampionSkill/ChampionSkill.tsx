import { useState } from "react";
import { motion, Variants } from "framer-motion";

import Tooltip from "@src/components/Common/Tooltip";

import type { SkillType } from "@src/types";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface Props {
  /** 좌측 상단 스킬 키 설명 */
  type: SkillType;
  /** 스킬 이미지 src */
  src: string;
  /** 스킬 이미지 alt */
  alt: string;
  /** tooltip에 사용할 스킬 이름 */
  title: string;
  /** tooltip에 사용할 스킬 설명 */
  description: string;
}

/** 2023/06/22 - 스킬 박스 컴포넌트 ( 이미지, 툴팁 ( 이름, 설명 ) ) - by 1-blue */
const ChampionSkill: React.FC<Props> = ({
  type,
  src,
  alt,
  title,
  description,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.figure
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      variants={variants}
    >
      <img src={src} alt={alt} onDragStart={(e) => e.preventDefault()} />
      <div className="absolute top-0 left-0 p-1 bg-black/70 text-xs font-bold cursor-default">
        {type}
      </div>
      <Tooltip
        show={isHover}
        title={title}
        description={description}
        horizon={type === "P" ? "left" : type === "R" ? "right" : "center"}
        vertical="top"
      />
    </motion.figure>
  );
};

export default ChampionSkill;
