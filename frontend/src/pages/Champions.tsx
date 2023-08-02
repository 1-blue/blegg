import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getPrevAndNextRiotChampionNames, shuffle } from "@src/libs";

import { useGetAllChampion } from "@src/query";

import Overlay from "@src/components/Common/Overlay";
import Indicator from "@src/components/Common/Indicator";
import Carousel from "@src/components/Carousel";
import ChampionCard from "@src/components/Riot/Champion/ChampionCard";
import ChampionBadge from "@src/components/Riot/Champion/ChampionBadge";

import type { RiotChampionName } from "@src/types";

/** 2023/06/19 - 챔피언 분석 페이지 컴포넌트 - by 1-blue */
const Champions: React.FC = () => {
  const navigate = useNavigate();
  const { champions } = useGetAllChampion();

  const selectName = useSearchParams()[0].get("name") as RiotChampionName;

  /** 2023/06/22 - 챔피언 상세 정보 오버레이 닫기 - by 1-blue */
  const onCloseOverlay = () => navigate("/champions", { replace: true });
  /** 2023/06/23 - 챔피언 상세 정보 오버레이 이전으로 변경 - by 1-blue */
  const prevOverlayCarousel = () => {
    const { prevChampionName } = getPrevAndNextRiotChampionNames(selectName);

    navigate(`/champions?name=${prevChampionName}`, { replace: true });
  };
  /** 2023/06/23 - 챔피언 상세 정보 오버레이 다음으로 변경 - by 1-blue */
  const nextOverlayCarousel = () => {
    const { nextChampionName } = getPrevAndNextRiotChampionNames(selectName);

    navigate(`/champions?name=${nextChampionName}`, { replace: true });
  };

  /** 2023/06/22 - 챔피언 클릭 ( 상세 정보 보기 ) - by 1-blue */
  const onClickChampion: React.MouseEventHandler<HTMLUListElement> = (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (!e.target.dataset.name) return;

    navigate(`/champions?name=${e.target.dataset.name}`, { replace: true });
  };

  /** 2023/06/25 - 메인 carousel index - by 1-blue */
  const [mainCarouselIndex, setMainCarouselIndex] = useState(0);
  /** 2023/06/25 - 메인 prev button event handler - by 1-blue */
  const prevMainCarousel = () => {
    if (!champions) return;

    setMainCarouselIndex((prev) =>
      prev + 1 > champions.length - 1 ? 0 : prev + 1
    );
  };
  /** 2023/06/25 - 메인 next button event handler - by 1-blue */
  const nextMainCarousel = () => {
    if (!champions) return;

    setMainCarouselIndex((prev) =>
      prev - 1 < 0 ? champions.length - 1 : prev - 1
    );
  };
  /** 2023/06/25 - 랜덤으로 섞은 챔피언들 정보 - by 1-blue */
  const [shuffleChampions, setShuffleChampions] = useState<
    NonNullable<typeof champions>
  >([]);
  useEffect(() => {
    if (!champions) return;

    setShuffleChampions(shuffle(champions));
  }, [champions]);

  // indicator
  if (!champions || shuffleChampions.length === 0)
    return (
      <aside className="fixed inset-0 flex justify-center items-center">
        <Indicator.Logo />
      </aside>
    );

  const { id, name, title, info, stats } = shuffleChampions[mainCarouselIndex];

  return (
    <>
      {/* 랜덤 챔피언 carousel FIXME: Layout shift 해결하기 */}
      <Carousel.Single
        uniqueKey={id}
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
        prev={prevMainCarousel}
        next={nextMainCarousel}
      >
        <Overlay.Absolute className="bg-gradient-to-b from-black/0 to-black/80">
          <Carousel.Caption main={name} sub={title} />
          <Carousel.ChampionInfo info={info} stats={stats} />
        </Overlay.Absolute>
      </Carousel.Single>

      {/* 챔피언들 */}
      <ul
        className="max-w-5xl mx-auto grid gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 mdlg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        onClick={onClickChampion}
      >
        {champions.map((champion) => (
          <ChampionBadge key={champion.id} champion={champion} />
        ))}
      </ul>

      {/* 선택한 챔피언 상세 정보 */}
      <Overlay.Fixed
        show={!!selectName}
        onCloseOverlay={onCloseOverlay}
        className="flex justify-center items-center bg-black/80 z-20"
      >
        <Carousel.Single
          uniqueKey={selectName}
          prev={prevOverlayCarousel}
          next={nextOverlayCarousel}
        >
          <ChampionCard name={selectName} />
        </Carousel.Single>
      </Overlay.Fixed>
    </>
  );
};

export default Champions;
