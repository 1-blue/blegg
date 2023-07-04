import type { Meta, StoryObj } from "@storybook/react";

import SummonerRecord from "./SummonerRecord";

const meta = {
  title: "Common/Skeleton/SummonerRecord",
  component: SummonerRecord,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof SummonerRecord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
