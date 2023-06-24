import { AnimatePresence } from "framer-motion";

import Carousel from "..";
import ProgressBar from "@src/components/ProgressBar";

import type { RiotInfo, RiotStats } from "@src/types";

interface Props {
  /** [Riot API](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json)에서 제공해준 특정 챔피언의 info */
  info: RiotInfo;
  /** [Riot API](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json)에서 제공해준 특정 챔피언의 stats */
  stats: RiotStats;
}

/** 2023/06/24 - Carousel에서 하단 설명 컴포넌트 - by 1-blue */
const ChampionInfo: React.FC<Props> = ({ info, stats }) => {
  return (
    <section className="absolute bottom-0 w-full flex items-start space-x-4 lg:space-x-8 p-4 flex-row">
      <AnimatePresence initial={true}>
        <div>
          <Carousel.Text
            custom={1}
            main={`공격력: ${stats.attackdamage}`}
            sub={`${stats.attackdamageperlevel}`}
          />
          <Carousel.Text
            custom={2}
            main={`공격속도: ${stats.attackspeed}`}
            sub={`${stats.attackspeedperlevel}`}
          />
          <Carousel.Text
            custom={3}
            main={`방어력: ${stats.armor}`}
            sub={`${stats.armorperlevel}`}
          />
          <Carousel.Text
            custom={4}
            main={`마법저항력: ${stats.spellblock}`}
            sub={`${stats.spellblockperlevel}`}
          />
          <Carousel.Text custom={5} main={`평타사거리: ${stats.attackrange}`} />
        </div>
        <div>
          <Carousel.Text
            custom={1}
            main={`체력: ${stats.hp}`}
            sub={`${stats.hpperlevel}`}
          />
          <Carousel.Text
            custom={2}
            main={`체력재생량: ${stats.hpregen}`}
            sub={`${stats.hpregenperlevel}`}
          />
          <Carousel.Text
            custom={3}
            main={`마나: ${stats.mp}`}
            sub={`${stats.mpperlevel}`}
          />
          <Carousel.Text
            custom={4}
            main={`마나재생량: ${stats.mpregen}`}
            sub={`${stats.mpregenperlevel}`}
          />
          <Carousel.Text custom={5} main={`이동속도: ${stats.movespeed}`} />
        </div>
        <div className="flex-1 flex flex-col space-y-2 text-xs lg:text-sm">
          <div className="flex flex-col items-center">
            <span className="self-start">물리공격력 ( {info.attack} )</span>
            <ProgressBar percent={info.attack * 10} />
          </div>
          <div className="flex flex-col items-center">
            <span className="self-start">마법공격력 ( {info.magic} )</span>
            <ProgressBar percent={info.magic * 10} />
          </div>
          <div className="flex flex-col items-center">
            <span className="self-start">방어력 ( {info.defense} )</span>
            <ProgressBar percent={info.defense * 10} />
          </div>
          <div className="flex flex-col items-center">
            <span className="self-start">난이도 ( {info.difficulty} )</span>
            <ProgressBar percent={info.difficulty * 10} />
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default ChampionInfo;
