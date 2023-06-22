import { useState } from "react";

import Tooltip from "@src/components/Tooltip";

type SkillType = "P" | "Q" | "W" | "E" | "R";

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
const SkillBox: React.FC<Props> = ({ type, src, alt, title, description }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <figure
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={src} alt={alt} />
      <div className="absolute top-0 left-0 p-1 bg-black/70 text-xs font-bold cursor-default">
        {type}
      </div>
      <Tooltip show={isHover} title={title} description={description} />
    </figure>
  );
};

export default SkillBox;
