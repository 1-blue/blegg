import Skeleton from "@src/components/Skeleton";

/** 2023/06/23 - "ChampionCard" Skeleton UI - by 1-blue */
const ChampionCard = () => {
  return (
    <>
      <article className="relative flex justify-center px-16 mx-4 w-full max-h-[545px] space-x-4">
        <section>
          <Skeleton.Square className="shrink-0 w-[300px] h-[545px]" />
        </section>

        <section className="flex-1 max-w-[500px] space-y-4">
          <Skeleton.Square className="w-1/2 h-8" />

          <section>
            <span className="inline-block text-lg font-bold text-main-text mb-1">
              사용팁
            </span>
            <Skeleton.Square className="w-full h-6 mb-1.5" />
            <Skeleton.Square className="w-2/3 h-6 mb-1.5" />
            <Skeleton.Square className="w-1/2 h-6 mb-1.5" />
            <Skeleton.Square className="w-3/4 h-6 mb-1.5" />
            <Skeleton.Square className="w-1/3 h-6 mb-1.5" />
          </section>

          <section>
            <span className="inline-block text-lg font-bold text-main-text mb-1">
              상대팁
            </span>
            <Skeleton.Square className="w-full h-6 mb-1.5" />
            <Skeleton.Square className="w-2/3 h-6 mb-1.5" />
            <Skeleton.Square className="w-1/2 h-6 mb-1.5" />
            <Skeleton.Square className="w-3/4 h-6 mb-1.5" />
            <Skeleton.Square className="w-1/3 h-6 mb-1.5" />
          </section>

          <section>
            <span className="inline-block text-lg font-bold text-main-text mb-1">
              스킬
            </span>

            <section className="flex space-x-2">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Skeleton.Square key={i} className="w-16 h-16" />
                ))}
            </section>
          </section>
        </section>
      </article>
    </>
  );
};

export default ChampionCard;
