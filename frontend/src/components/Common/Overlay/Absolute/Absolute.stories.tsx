import type { Meta, StoryObj } from "@storybook/react";

import Absolute from "./Absolute";

const meta = {
  title: "Common/Overlay/Absolute",
  component: Absolute,
  argTypes: {
    className: { description: "TailwindCss className" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Absolute>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "bg-gradient-to-b from-black/0 to-main-400/80",
  },
};
