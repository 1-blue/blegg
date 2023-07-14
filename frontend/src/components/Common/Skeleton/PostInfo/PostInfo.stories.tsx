import type { Meta, StoryObj } from "@storybook/react";

import PostInfo from "./PostInfo";

const meta = {
  title: "Common/Skeleton/PostInfo",
  component: PostInfo,
  tags: ["autodocs"],
  argTypes: {
    className: { description: "TailwindCss className" },
  },
} satisfies Meta<typeof PostInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
