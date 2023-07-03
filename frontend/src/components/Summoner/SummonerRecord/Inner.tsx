import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { timeFormat } from "@src/libs";

import ChampionSpell from "@src/components/Champion/ChampionSpell";
import ChampionItem from "@src/components/Champion/ChampionItem";

import type { RiotMatch } from "@src/types/apis";

interface Props {
  match: RiotMatch;
}

/** 2023/07/03 - 소환사의 특정 게임 정보 컴포넌트 - by 1-blue */
const Inner: React.FC<Props> = ({ match }) => {
  const playTimeMinute = Math.floor(match.info.time.play / 1000 / 60);
  const playTimeSecend = Math.floor((match.info.time.play / 1000) % 60);

  return (
    <li
      className={twMerge(
        "min-w-[340px] xs:min-w-[512px] flex space-x-6 px-6 py-3 bg-main-box-bg border border-main-line rounded-md border-x-8",
        match.info.win ? "border-x-blue-600" : "border-x-red-600"
      )}
    >
      {/* 승패여부/게임타입/시작시간/플레이시간 */}
      <section className="flex flex-col space-y-4 w-20">
        {/* 승패여부/게임타입 */}
        <div className="flex flex-col text-sm">
          {/* 승/패 타입 */}
          <span
            className={twMerge(
              "text-lg font-bold",
              match.info.win ? "text-blue-500" : "text-red-500"
            )}
          >
            {match.info.win ? "승리" : "패배"}
          </span>
          {/* 게임 타입 */}
          <span>{match.info.mode}</span>
        </div>
        {/* 시작시간/플레이시간 */}
        <div className="flex flex-col text-sm">
          {/* 게임 시작시간 */}
          <span>{timeFormat(match.info.time.start)}</span>
          {/* 게임 플레이시간 */}
          <div className="text-xs">
            <span>{playTimeMinute}분</span>
            <span> </span>
            <span>{playTimeSecend}초</span>
          </div>
        </div>
      </section>

      {/* 게임정보 ( 챔피언/스펠/KDA/평점/CS/킬/데스/어시/red/blue ) */}
      <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 xl:grid-cols-4">
        {/* 챔피언/스펠 */}
        <section className="flex space-x-2">
          {/* 챔피언 */}
          <Link
            to={`/champions?name=${match.player.champion.name}`}
            className="relative"
          >
            <img
              src={match.player.champion.imageSrc}
              alt={match.player.champion.name}
              className="w-[100px] h-full rounded-md"
            />

            {/* 이름 */}
            <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3 bg-gray-700 px-1.5 py-1 text-xxs rounded-md">
              {match.player.champion.name}
            </span>
            {/* 레벨 */}
            <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-gray-700 px-1.5 py-1 text-xxs rounded-md">
              {match.player.champion.level}
            </span>
          </Link>
          {/* 스펠 */}
          <div className="flex flex-col justify-between">
            {match.player.spellKeys.map((spellKey) => (
              <ChampionSpell key={spellKey} spellKey={spellKey} />
            ))}
          </div>
        </section>

        {/* KDA/평점/CS/킬정보 */}
        <section className="flex flex-col justify-between whitespace-nowrap">
          {/* KDA */}
          <div>
            <span>{match.player.scores.kills}</span>
            <span> / </span>
            <span>{match.player.scores.deaths}</span>
            <span> / </span>
            <span>{match.player.scores.assists}</span>
            <span> </span>
            <span className="text-sm">( {match.player.scores.kda} )</span>
          </div>
          {/* CS */}
          <div className="text-sm">
            <div>
              <span>CS: </span>
              <span>
                {match.player.scores.cs.minion + match.player.scores.cs.jungle}
              </span>
              <span> </span>
              <span className="text-xs">
                ( {match.player.scores.cs.average} )
              </span>
            </div>
            <div>
              <span className="text-xs">
                ( 미니언: {match.player.scores.cs.minion} / 정글:{" "}
                {match.player.scores.cs.jungle} )
              </span>
            </div>
          </div>
          {/* 펜타/쿼드라/트리플/더블킬 여부 */}
          <div className="space-x-1">
            {!!match.player.scores.pentaKills && (
              <span className="px-2.5 py-1 bg-main-line rounded-full text-xxs">
                펜타
              </span>
            )}
            {!!match.player.scores.quadraKills && (
              <span className="px-2.5 py-1 bg-main-line rounded-full text-xxs">
                쿼드라
              </span>
            )}
            {!!match.player.scores.tripleKills && (
              <span className="px-2.5 py-1 bg-main-line rounded-full text-xxs">
                트리플
              </span>
            )}
            {!!match.player.scores.doubleKills && (
              <span className="px-2.5 py-1 bg-main-line rounded-full text-xxs">
                더블
              </span>
            )}
          </div>
        </section>

        {/* 아이템 */}
        <section className="grid gap-1 grid-cols-4">
          {match.player.itemIds
            .slice(0, -1)
            .map((itemId) =>
              itemId === 0 ? (
                <div
                  key={itemId}
                  className="w-11 h-11 bg-gray-700/60 rounded-md"
                />
              ) : (
                <ChampionItem key={itemId} id={itemId} />
              )
            )}
        </section>

        {/* red/blue 팀원 */}
        <section className="flex-1 flex space-x-2">
          <div className="flex flex-col justify-between w-0 flex-1 bg-red-500/50 p-0.5 rounded-md">
            {match.redTeam.map((red) => (
              <div className="flex items-center space-x-0.5">
                <Link
                  to={`/champions?name=${red.champion.name}`}
                  className="flex-shrink-0"
                >
                  <img
                    src={red.champion.imageSrc}
                    alt={red.champion.name}
                    className="w-[18px] h-[18px]"
                  />
                </Link>
                <Link
                  to={`/summoner?q=${red.summoner.name}`}
                  className="text-xs truncate"
                >
                  {red.summoner.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between w-0 flex-1 bg-blue-500/50 p-0.5 rounded-md">
            {match.blueTeam.map((blue) => (
              <div className="flex items-center space-x-0.5">
                <Link
                  to={`/champions?name=${blue.champion.name}`}
                  className="flex-shrink-0"
                >
                  <img
                    src={blue.champion.imageSrc}
                    alt={blue.champion.name}
                    className="w-[18px] h-[18px]"
                  />
                </Link>
                <Link
                  to={`/summoner?q=${blue.summoner.name}`}
                  className="text-xs truncate"
                >
                  {blue.summoner.name}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </li>
  );
};

export default Inner;
