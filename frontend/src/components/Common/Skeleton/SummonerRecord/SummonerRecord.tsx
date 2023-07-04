import Square from "../Square";

/** 2023/07/02 - "SummonerRecord" Skeleton UI - by 1-blue */
const SummonerRecord = () => {
  return (
    <ul className="mt-6 -mx-4 space-y-4">
      {Array(10)
        .fill(null)
        .map((v, i) => (
          <Square key={i} className="w-full h-32" />
        ))}
    </ul>
  );
};

export default SummonerRecord;
