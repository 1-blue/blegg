import Animate from "@src/components/Animate";
import Icon from "@src/components/Common/Icon";

import type { ApiGetAllChampionResponse } from "@src/types/apis";

interface Props {
  /** 특정 챔피언 정보 ( [특정 챔피언 API](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/champion/Poppy.json) */
  champion: ApiGetAllChampionResponse[0];
}

/** 2023/06/26 - 특정 챔피언 간단 정보 Badge 컴포넌트 - by 1-blue */
const ChampionBadge: React.FC<Props> = ({ champion }) => {
  return (
    <li
      className="relative min-w-[150px] flex flex-col items-center space-y-2 p-4 bg-main-950 rounded-lg border-2 border-main-400 transition-all hover:scale-110 hover:border-main-500"
      role="button"
      data-name={champion.id}
    >
      {/* Tag */}
      <div className="absolute top-2 left-2 flex space-x-1.5 pointer-events-none">
        {champion.tags.map((tag) => (
          <Icon.Tag key={tag} tag={tag} />
        ))}
      </div>

      {/* champion image */}
      <img
        src={champion.src}
        alt={champion.name + " 이미지"}
        className="w-20 h-20 rounded-full border-4 border-main-600 pointer-events-none"
      />

      {/* name / title */}
      <div className="flex flex-col items-center space-y-1 pointer-events-none">
        <span className="text-lg text-main-text">{champion.name}</span>
        <span className="text-xs text-gray-400">{champion.title}</span>
      </div>

      {/* 난이도 */}
      <Animate.ProgressBar
        percent={champion.info.difficulty * 10}
        className="h-1 lg:h-2"
      />
    </li>
  );
};

export default ChampionBadge;
