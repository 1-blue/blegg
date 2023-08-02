import type { Meta, StoryObj } from "@storybook/react";

import ChampionItem from "./ChampionItem";

const meta = {
  title: "Common/Skeleton/ChampionItem",
  component: ChampionItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ChampionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
