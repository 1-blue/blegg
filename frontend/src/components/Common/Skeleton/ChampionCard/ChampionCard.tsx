import Square from "@src/components/Common/Skeleton/Square";

/** 2023/06/23 - "ChampionCard" Skeleton UI - by 1-blue */
const ChampionCard = () => {
  return (
    <article className="relative flex flex-col lg:flex-row mx-16 bg-main-bg rounded-lg max-h-[545px] overflow-x-hidden overflow-y-auto scroll">
      <section className="hidden xs:inline-block xs:absolute lg:sticky right-6 top-6 lg:top-0 w-44 xssm:w-32 lg:w-auto lg:inline-block shrink-0">
        <Square className="shrink-0 lg:w-[300px] lg:h-[545px] w-0" />
      </section>

      {/* 우측 설명 */}
      <section className="max-w-[500px] space-y-4 p-6">
        {/* 이름 */}
        <Square className="w-1/2 h-8" />

        {/* 능력치 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            능력치
          </span>

          <div className="flex flex-col xssm:flex-row xssm:space-x-6">
            <section className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>공격력: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>공격속도: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>방어력: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>마법저항력: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>평타사거리: </span>
                <Square className="h-4 rounded-sm" />
              </div>
            </section>
            <section className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>체력: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>체력재생량: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>마나: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>마나재생량: </span>
                <Square className="h-4 rounded-sm" />
              </div>
              <div className="flex space-x-2">
                <span>이동속도: </span>
                <Square className="h-4 rounded-sm" />
              </div>
            </section>
          </div>
        </section>

        {/* 정보 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            정보
          </span>

          <section className="flex-1 flex flex-col space-y-2 text-xs lg:text-sm">
            <div>
              <span>물리공격력</span>
              <Square className="w-full h-3 rounded-sm" />
            </div>
            <div>
              <span>마법공격력</span>
              <Square className="w-full h-3 rounded-sm" />
            </div>
            <div>
              <span>방어력</span>
              <Square className="w-full h-3 rounded-sm" />
            </div>
            <div>
              <span>난이도</span>
              <Square className="w-full h-3 rounded-sm" />
            </div>
          </section>
        </section>

        {/* 스킬 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            스킬
          </span>
          <section className="flex space-x-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Square key={i} className="w-16 h-16" />
              ))}
          </section>
        </section>

        {/* 사용팁 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            사용팁
          </span>
          <Square className="w-full h-6 mb-1.5" />
          <Square className="w-2/3 h-6 mb-1.5" />
          <Square className="w-1/2 h-6 mb-1.5" />
          <Square className="w-3/4 h-6 mb-1.5" />
          <Square className="w-1/3 h-6 mb-1.5" />
        </section>

        {/* 상대팁 */}
        <section>
          <span className="inline-block text-lg font-bold text-main-text mb-1">
            상대팁
          </span>
          <Square className="w-full h-6 mb-1.5" />
          <Square className="w-2/3 h-6 mb-1.5" />
          <Square className="w-1/2 h-6 mb-1.5" />
          <Square className="w-3/4 h-6 mb-1.5" />
          <Square className="w-1/3 h-6 mb-1.5" />
        </section>
      </section>
    </article>
  );
};

export default ChampionCard;
