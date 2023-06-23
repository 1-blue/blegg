import type { Meta, StoryObj } from "@storybook/react";

import ChampionCard from "./ChampionCard";

const meta = {
  title: "Skeleton/ChampionCard",
  component: ChampionCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ChampionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
