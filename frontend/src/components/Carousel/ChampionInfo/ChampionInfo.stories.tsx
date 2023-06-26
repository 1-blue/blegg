import type { Meta, StoryObj } from "@storybook/react";

import { getMocDetailChampion } from "@src/libs";

import ChampionInfo from "./ChampionInfo";

const champion = getMocDetailChampion();

const meta = {
  title: "Carousel/ChampionInfo",
  component: ChampionInfo,
  argTypes: {
    info: {
      description: `<a href="https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json" target="_blank">Riot API</a>에서 제공해준 특정 챔피언의 info`,
    },
    stats: {
      description: `<a href="https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json" target="_blank">Riot API</a>에서 제공해준 특정 챔피언의 stats`,
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ChampionInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: champion.stats,
    info: champion.info,
  },
};
