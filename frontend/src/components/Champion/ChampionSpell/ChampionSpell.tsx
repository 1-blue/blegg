import { useState } from "react";
import { type Variants, motion } from "framer-motion";

import { useGetSpell } from "@src/query";

import Tooltip from "@src/components/Common/Tooltip/Tooltip";
import Skeleton from "@src/components/Common/Skeleton";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface Props {
  spellKey: number;
}

/** 2023/07/02 - 특정 스펠 이미지 및 툴팁 컴포넌트 - by 1-blue */
const ChampionSpell: React.FC<Props> = ({ spellKey }) => {
  const { spell, isLoading } = useGetSpell({ key: spellKey });

  const [isHover, setIsHover] = useState(false);

  // TODO:
  if (!spell) return <></>;
  if (isLoading) return <Skeleton.ChampionSpell />;

  return (
    <motion.figure
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      variants={variants}
    >
      <img src={spell.imageSrc} alt="" className="w-12 h-12 rounded-md" />
      <Tooltip
        show={isHover}
        title={spell.name}
        description={spell.description}
        horizon="center"
        vertical="top"
      />
    </motion.figure>
  );
};

export default ChampionSpell;
