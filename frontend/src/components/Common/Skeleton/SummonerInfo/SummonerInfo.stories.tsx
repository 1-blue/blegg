import type { Meta, StoryObj } from "@storybook/react";

import SummonerInfo from "./SummonerInfo";

const meta = {
  title: "Common/Skeleton/SummonerInfo",
  component: SummonerInfo,
  tags: ["autodocs"],
  argTypes: { name: { description: "소환사 이름" } },
} satisfies Meta<typeof SummonerInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: "Akaps" } };
