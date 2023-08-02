import { useState } from "react";
import { type Variants, motion } from "framer-motion";

import { useGetItem } from "@src/query";

import Tooltip from "@src/components/Common/Tooltip/Tooltip";
import Skeleton from "@src/components/Common/Skeleton";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

import type { ApiGetItemResponse } from "@src/types/apis";
interface Props {
  /** 해당 아이템의 ID ( 식별자, Riot API에서 제공 ) */
  id: number;
  /** React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값 ( [Riot Item API](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/item.json) ) */
  initialData?: ApiGetItemResponse;
}

/** 2023/07/03 - 특정 아이템 이미지 및 툴팁 컴포넌트 - by 1-blue */
const ChampionItem: React.FC<Props> = ({ id, initialData }) => {
  const { item, isLoading } = useGetItem({ id }, initialData);

  const [isHover, setIsHover] = useState(false);

  // loading
  if (isLoading) return <Skeleton.ChampionItem />;
  // 404
  if (!item)
    return (
      <div className="w-11 h-11 bg-gray-700/70 rounded-md flex justify-center items-center text-xxs">
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
        src={item.imageSrc}
        alt={item.name}
        className="w-11 h-11 rounded-md"
      />
      <Tooltip
        show={isHover}
        title={item.name}
        description={
          item.totalDescription +
          (item.colloq.length
            ? "<br />" + "별칭: " + item.colloq.join(", ")
            : "")
        }
        horizon="center"
        vertical="top"
      />
    </motion.figure>
  );
};

export default ChampionItem;
