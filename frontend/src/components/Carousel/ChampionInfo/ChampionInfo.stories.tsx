import type { Meta, StoryObj } from "@storybook/react";

import ChampionInfo from "./ChampionInfo";

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
} satisfies Meta<typeof ChampionInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: {
      hp: 610,
      hpperlevel: 104,
      mp: 280,
      mpperlevel: 40,
      movespeed: 345,
      armor: 38,
      armorperlevel: 4.7,
      spellblock: 32,
      spellblockperlevel: 2.05,
      attackrange: 125,
      hpregen: 8,
      hpregenperlevel: 0.8,
      mpregen: 7,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 64,
      attackdamageperlevel: 4,
      attackspeedperlevel: 2.5,
      attackspeed: 0.625,
    },
    info: {
      attack: 6,
      defense: 7,
      magic: 2,
      difficulty: 6,
    },
  },
};
