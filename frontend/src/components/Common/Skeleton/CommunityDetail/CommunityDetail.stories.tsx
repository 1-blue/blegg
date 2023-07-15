import type { Meta, StoryObj } from "@storybook/react";

import CommunityDetail from "./CommunityDetail";

const meta = {
  title: "Common/Skeleton/CommunityDetail",
  component: CommunityDetail,
  tags: ["autodocs"],
  argTypes: {
    className: { description: "TailwindCss className" },
  },
} satisfies Meta<typeof CommunityDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
