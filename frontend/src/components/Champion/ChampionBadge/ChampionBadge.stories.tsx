import type { Meta, StoryObj } from "@storybook/react";

import { getMocChampion } from "@src/libs";

import ChampionBadge from "./ChampionBadge";

const champion = getMocChampion();

const meta = {
  title: "Champion/ChampionBadge",
  component: ChampionBadge,
  argTypes: { champion: { description: "특정 챔피언 정보 ( ChampionData )" } },
  tags: ["autodocs"],
} satisfies Meta<typeof ChampionBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { champion } };
