import type { Meta, StoryObj } from "@storybook/react";

import Post from "./Post";

const meta = {
  title: "Common/Skeleton/Post",
  component: Post,
  tags: ["autodocs"],
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
