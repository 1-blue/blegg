import type { Meta, StoryObj } from "@storybook/react";

import Square from "./Square";

const meta = {
  title: "Common/Skeleton/Square",
  component: Square,
  tags: ["autodocs"],
  argTypes: {
    className: { description: "TailwindCss className" },
  },
} satisfies Meta<typeof Square>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
