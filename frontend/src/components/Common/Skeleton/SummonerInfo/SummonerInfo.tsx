import Square from "../Square";

interface Props {
  name: string;
}

/** 2023/07/02 - "SummonerInfo" Skeleton UI - by 1-blue */
const SummonerInfo: React.FC<Props> = ({ name }) => {
  return (
    <article className="mt-6 -mx-4 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
        <Square className="w-28 h-28" />

        {/* 닉네임/솔로랭크/자유랭크 */}
        <div className="flex-1 space-y-1.5">
          {/* 닉네임 */}
          <h2 className="text-2xl font-bold tracking-widest break-all">
            {name}
          </h2>

          {/* 솔로랭크 */}
          <div className="flex flex-col">
            <span className="text-sm">솔로랭크</span>
            <Square className="w-full h-4" />
          </div>

          {/* 자유랭크 */}
          <div className="flex flex-col">
            <span className="text-sm">자유랭크</span>
            <Square className="w-full h-4" />
          </div>
        </div>
      </section>

      <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
        <Square className="w-28 h-28" />

        {/* 티어/랭크/점수/승률 */}
        <div className="flex-1 space-y-1.5">
          <h5 className="text-xl font-bold tracking-widest">솔로랭크</h5>

          {/* 티어/랭크/점수 */}
          <div className="flex flex-col space-y-1">
            <Square className="w-2/3 h-5" />
            <Square className="w-1/3 h-3" />
          </div>
          {/* 승률 */}
          <div className="flex flex-col space-y-1">
            <Square className="w-2/3 h-5" />
            <Square className="w-1/2 h-3" />
          </div>
        </div>
      </section>

      <section className="min-w-[320px] flex space-x-6 p-6 bg-main-box-bg border border-main-line rounded-md">
        <Square className="w-28 h-28" />

        {/* 티어/랭크/점수/승률 */}
        <div className="flex-1 space-y-1.5">
          <h5 className="text-xl font-bold tracking-widest">자유랭크</h5>

          {/* 티어/랭크/점수 */}
          <div className="flex flex-col space-y-1">
            <Square className="w-2/3 h-5" />
            <Square className="w-1/3 h-3" />
          </div>
          {/* 승률 */}
          <div className="flex flex-col space-y-1">
            <Square className="w-2/3 h-5" />
            <Square className="w-1/2 h-3" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default SummonerInfo;
