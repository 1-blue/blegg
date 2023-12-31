import { Navigate } from "react-router-dom";

import { riotChampionNames } from "@src/libs";

import { useGetDetailChampion } from "@src/query";

import Animate from "@src/components/Animate";
import Skeleton from "@src/components/Common/Skeleton";
import Overlay from "@src/components/Common/Overlay";
import ChampionSkill from "@src/components/Riot/Champion/ChampionSkill";

import type { RiotChampionName } from "@src/types";
import type { ApiGetDetailChampionResponse } from "@src/types/apis";

interface Props {
  /** 챔피언 영어 이름 */
  name: RiotChampionName;
  /** React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값 ( [Riot Champion API](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/champion/Poppy.json) ) */
  initialData?: ApiGetDetailChampionResponse;
}

/** 2023/06/26 - 챔피언 상세 정보 Card 컴포넌트 - by 1-blue */
const ChampionCard: React.FC<Props> = ({ name, initialData }) => {
  const { champion, isLoading } = useGetDetailChampion({ name }, initialData);

  // 잘못된 챔피언 이름인 경우
  if (!riotChampionNames.find((championName) => championName === name)) {
    return <Navigate to="/champions" replace />;
  }
  if (isLoading || !champion) return <Skeleton.ChampionCard />;

  const { stats, info } = champion;

  const randomSkinIndex = Math.floor(Math.random() * champion.skins.length);

  return (
    <article
      className="relative flex flex-col lg:flex-row mx-16 bg-main-bg rounded-lg max-h-[545px] overflow-x-hidden overflow-y-auto scroll"
      onClick={(e) => e.stopPropagation()}
    >
      {/* 챔피언 이미지 ( 584px 이상인 경우 ) */}
      <figure className="hidden xssm:inline-block xs:absolute lg:sticky right-6 top-6 lg:top-0 w-44 xssm:w-32 lg:w-auto shrink-0">
        <img
          src={champion.skins[randomSkinIndex].src}
          alt={`${champion.name} 이미지`}
          className="lg:w-full lg:h-full"
          onDragStart={(e) => e.preventDefault()}
        />
        <Overlay.Absolute className="bg-gradient-to-b from-black/0 to-black/80">
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-main-text text-xs lg:text-lg">
            {champion.splashs[randomSkinIndex].name}
          </span>
        </Overlay.Absolute>
      </figure>

      {/* 우측 설명 */}
      <section className="w-auto space-y-4 p-6 xssm:w-[500px]">
        {/* 챔피언 이미지 ( 584px 미만인 경우 ) */}
        <figure className="inline-block xssm:hidden -mt-5 -mx-5 rounded-md overflow-hidden relative">
          <img
            src={champion.splashs[randomSkinIndex].src}
            alt={`${champion.name} 이미지`}
            className="w-full h-full"
            onDragStart={(e) => e.preventDefault()}
          />
          <Overlay.Absolute className="bg-gradient-to-b from-black/0 to-black/80">
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold text-main-text">
              {champion.splashs[randomSkinIndex].name}
            </span>
          </Overlay.Absolute>
        </figure>

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
                <ChampionSkill key={skill.type} {...skill} />
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
          {champion.allytips.length === 0 && (
            <p className="text-sm">아직 사용팁이 없습니다.</p>
          )}
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
          {champion.enemytips.length === 0 && (
            <p className="text-sm">아직 상대팁이 없습니다.</p>
          )}
        </section>
      </section>
    </article>
  );
};

export default ChampionCard;
