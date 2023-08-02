import type { Meta, StoryObj } from "@storybook/react";

import ChampionSpell from "./ChampionSpell";

const meta = {
  title: "Common/Skeleton/ChampionSpell",
  component: ChampionSpell,
  tags: ["autodocs"],
} satisfies Meta<typeof ChampionSpell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
