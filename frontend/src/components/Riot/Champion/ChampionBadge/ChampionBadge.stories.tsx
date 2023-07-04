import type { Meta, StoryObj } from "@storybook/react";

import { mocChampion } from "@src/libs";

import ChampionBadge from "./ChampionBadge";

const meta = {
  title: "Riot/Champion/ChampionBadge",
  component: ChampionBadge,
  argTypes: {
    champion: {
      description: `특정 챔피언 정보<br />( <a href="https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/champion/Poppy.json" target="_blank">특정 챔피언 API</a> )`,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChampionBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { champion: mocChampion[0] } };
