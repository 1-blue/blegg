import { useState } from "react";
import { type Variants, motion } from "framer-motion";

import { useGetSpell } from "@src/query";

import Tooltip from "@src/components/Common/Tooltip/Tooltip";
import Skeleton from "@src/components/Common/Skeleton";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

import type { ApiGetSpellResponse } from "@src/types/apis";
interface Props {
  /** 해당 스펠의 key ( 식별자, Riot API에서 제공 ) */
  spellKey: number;
  /** React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값 ( [Riot Item API](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/summoner.json) ) */
  initialData?: ApiGetSpellResponse;
}

/** 2023/07/02 - 특정 스펠 이미지 및 툴팁 컴포넌트 - by 1-blue */
const ChampionSpell: React.FC<Props> = ({ spellKey, initialData }) => {
  const { spell, isLoading } = useGetSpell({ key: spellKey }, initialData);

  const [isHover, setIsHover] = useState(false);

  // loading
  if (isLoading) return <Skeleton.ChampionSpell />;
  // 404
  if (!spell)
    return (
      <div className="w-12 h-12 bg-gray-700/70 rounded-md flex justify-center items-center text-xxs">
        404
      </div>
    );

  return (
    <motion.figure
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      variants={variants}
    >
      <img
        src={spell.imageSrc}
        alt={spell.name}
        className="w-12 h-12 rounded-md"
      />
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
