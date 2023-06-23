import type { Meta, StoryObj } from "@storybook/react";

import Square from "./Square";

const meta = {
  title: "Skeleton/Square",
  component: Square,
  tags: ["autodocs"],
} satisfies Meta<typeof Square>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
