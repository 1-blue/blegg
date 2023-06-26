import type { Meta, StoryObj } from "@storybook/react";

import ChampionBadge from "./ChampionBadge";

import type { ChampionData } from "@src/types";

const champion: ChampionData = {
  id: "Poppy",
  name: "뽀삐",
  title: "망치의 수호자",
  src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Poppy.png",
  info: {
    attack: 6,
    defense: 7,
    magic: 2,
    difficulty: 6,
  },
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
  tags: ["Tank", "Fighter"],
};

const meta = {
  title: "Champion/ChampionBadge",
  component: ChampionBadge,
  argTypes: {
    champion: { description: "특정 챔피언 정보 ( ChampionData )" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChampionBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    champion,
  },
};
