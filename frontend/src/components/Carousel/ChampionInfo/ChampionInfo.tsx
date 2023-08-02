import Animate from "@src/components/Animate";

import type { RiotChampionInfo, RiotChampionStats } from "@src/types";

interface Props {
  /** [Riot API](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json)에서 제공해준 특정 챔피언의 info */
  info: RiotChampionInfo;
  /** [Riot API](https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json)에서 제공해준 특정 챔피언의 stats */
  stats: RiotChampionStats;
}

/** 2023/06/24 - Carousel에서 하단 설명 컴포넌트 - by 1-blue */
const ChampionInfo: React.FC<Props> = ({ info, stats }) => {
  return (
    <section className="absolute bottom-0 w-full flex items-start space-x-4 lg:space-x-8 p-4 flex-row">
      {/* 능력치 - 1 */}
      <Animate.Wrapper>
        <Animate.Text
          main={`공격력: ${stats.attackdamage}`}
          sub={stats.attackdamageperlevel + ""}
        />
        <Animate.Text
          main={`공격속도: ${stats.attackspeed}`}
          sub={stats.attackspeedperlevel + ""}
        />
        <Animate.Text
          main={`방어력: ${stats.armor}`}
          sub={stats.armorperlevel + ""}
        />
        <Animate.Text
          main={`마법저항력: ${stats.spellblock}`}
          sub={stats.spellblockperlevel + ""}
        />
        <Animate.Text main={`평타사거리: ${stats.attackrange}`} />
      </Animate.Wrapper>
      {/* 능력치 - 2 */}
      <Animate.Wrapper>
        <Animate.Text main={`체력: ${stats.hp}`} sub={stats.hpperlevel + ""} />
        <Animate.Text
          main={`체력재생량: ${stats.hpregen}`}
          sub={stats.hpregenperlevel + ""}
        />
        <Animate.Text main={`마나: ${stats.mp}`} sub={stats.mpperlevel + ""} />
        <Animate.Text
          main={`마나재생량: ${stats.mpregen}`}
          sub={stats.mpregenperlevel + ""}
        />
        <Animate.Text main={`이동속도: ${stats.movespeed}`} />
      </Animate.Wrapper>
      {/* 정보 */}
      <Animate.Wrapper className="flex-1 flex flex-col space-y-2 text-xs lg:text-sm">
        <Animate.ProgressBar
          caption={`물리공격력  ( ${info.attack} )`}
          percent={info.attack * 10}
        />
        <Animate.ProgressBar
          caption={`마법공격력  ( ${info.magic} )`}
          percent={info.magic * 10}
        />
        <Animate.ProgressBar
          caption={`방어력  ( ${info.defense} )`}
          percent={info.defense * 10}
        />
        <Animate.ProgressBar
          caption={`난이도  ( ${info.difficulty} )`}
          percent={info.difficulty * 10}
        />
      </Animate.Wrapper>
    </section>
  );
};

export default ChampionInfo;
