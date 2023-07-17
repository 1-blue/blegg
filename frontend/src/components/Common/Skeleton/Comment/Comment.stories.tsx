import type { Meta, StoryObj } from "@storybook/react";

import Comment from "./Comment";

const meta = {
  title: "Common/Skeleton/Comment",
  component: Comment,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[80vw]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
