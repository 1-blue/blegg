import type { Meta, StoryObj } from "@storybook/react";

import Circle from "./Circle";

const meta = {
  title: "Common/Skeleton/Circle",
  component: Circle,
  tags: ["autodocs"],
  argTypes: {
    className: { description: "TailwindCss className" },
  },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
