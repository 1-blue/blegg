import type { Meta, StoryObj } from "@storybook/react";

import { mocLeague } from "@src/libs";

import LeagueBedge from "./LeagueBedge";

const meta = {
  title: "Riot/League/LeagueBedge",
  component: LeagueBedge,
  argTypes: {
    league: { description: "특정 리그의 특정 유저에 대한 데이터" },
    ranking: { description: "유저 전체 랭킹" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LeagueBedge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    league: mocLeague[mocLeague.length - 1],
    ranking: 15,
  },
};
