import type { RiotInfo, RiotStats, RiotTag } from ".";

export interface ChampionData {
  id: string;
  name: string;
  title: string;
  src: string;
  info: RiotInfo;
  tags: RiotTag[];
  stats: RiotStats;
}
export type Champions = ChampionData[];
