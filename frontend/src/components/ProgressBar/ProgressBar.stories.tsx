import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "./ProgressBar";

const meta = {
  title: "Common/ProgressBar",
  component: ProgressBar,
  argTypes: {
    percent: { description: "공간을 채울 비율 ( 0 ~ 100 )" },
  },
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 50,
  },
};
