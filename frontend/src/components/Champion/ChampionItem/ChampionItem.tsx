import { useState } from "react";
import { type Variants, motion } from "framer-motion";

import { useGetItem } from "@src/query";

import Tooltip from "@src/components/Common/Tooltip/Tooltip";
import Skeleton from "@src/components/Common/Skeleton";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface Props {
  id: number;
}

/** 2023/07/03 - 특정 아이템 이미지 및 툴팁 컴포넌트 - by 1-blue */
const ChampionItem: React.FC<Props> = ({ id }) => {
  const { item, isLoading } = useGetItem({ id });

  const [isHover, setIsHover] = useState(false);

  // TODO:
  if (!item) return <></>;
  if (isLoading) return <Skeleton.ChampionItem />;

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
