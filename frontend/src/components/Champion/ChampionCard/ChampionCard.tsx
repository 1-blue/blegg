import { Navigate } from "react-router-dom";

import { riotChampionNames } from "@src/libs";

import { useGetChampion } from "@src/query";

import Animate from "@src/components/Animate";
import Skeleton from "@src/components/Common/Skeleton";
import SkillBox from "@src/components/Champion/ChampionSkill";

import type { RiotChampionName } from "@src/types";

interface Props {
  /** 챔피언 영어 이름 */
  name: RiotChampionName;
}

/** 2023/06/26 - 챔피언 상세 정보 Card 컴포넌트 - by 1-blue */
const ChampionCard: React.FC<Props> = ({ name }) => {
  const { champion, isLoading } = useGetChampion({ name });

  // 잘못된 챔피언 이름인 경우
  if (!riotChampionNames.find((championName) => championName === name)) {
    return <Navigate to="/champions" replace />;
  }
  if (isLoading || !champion) return <Skeleton.ChampionCard />;

  const { stats, info } = champion;

  return (
    <article
      className="relative flex flex-col lg:flex-row mx-16 bg-main-bg rounded-lg max-h-[545px] overflow-x-hidden overflow-y-auto scroll"
      onClick={(e) => e.stopPropagation()}
    >
      {/* 좌측 이미지 */}
      <figure className="hidden xs:inline-block xs:absolute lg:sticky right-6 top-6 lg:top-0 w-44 xssm:w-32 lg:w-auto lg:inline-block shrink-0">
        <img
          src={champion.skins[0].src}
          alt={`${champion.name} 이미지`}
          className="lg:w-full lg:h-full"
          onDragStart={(e) => e.preventDefault()}
        />
      </figure>

      {/* 우측 설명 */}
      <section className="max-w-[500px] space-y-4 p-6">
        {/* 이름 */}
        <h2 className="text-main-text text-xl font-black">
          {champion.name} ( {champion.title} )
        </h2>

        {/* 능력치 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            능력치
          </span>

          <div className="flex flex-col xssm:flex-row xssm:space-x-6">
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
            <Animate.Wrapper>
              <Animate.Text
                main={`체력: ${stats.hp}`}
                sub={stats.hpperlevel + ""}
              />
              <Animate.Text
                main={`체력재생량: ${stats.hpregen}`}
                sub={stats.hpregenperlevel + ""}
              />
              <Animate.Text
                main={`마나: ${stats.mp}`}
                sub={stats.mpperlevel + ""}
              />
              <Animate.Text
                main={`마나재생량: ${stats.mpregen}`}
                sub={stats.mpregenperlevel + ""}
              />
              <Animate.Text main={`이동속도: ${stats.movespeed}`} />
            </Animate.Wrapper>
          </div>
        </section>

        {/* 정보 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            정보
          </span>

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

        {/* 스킬 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            스킬
          </span>
          <Animate.Wrapper>
            <section className="flex justify-between space-x-2">
              {/* 패시브 && 스킬 ( Q, W, E, R ) */}
              {champion.skills.map((skill) => (
                <SkillBox key={skill.type} {...skill} />
              ))}
            </section>
          </Animate.Wrapper>
        </section>

        {/* 사용팁 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            사용팁
          </span>
          {champion.allytips.map((tip, i) => (
            <p key={i} className="text-sm">
              {tip}
            </p>
          ))}
        </section>

        {/* 상대팁 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            상대팁
          </span>
          {champion.enemytips.map((tip, i) => (
            <p key={i} className="text-sm">
              {tip}
            </p>
          ))}
        </section>
      </section>
    </article>
  );
};

export default ChampionCard;
