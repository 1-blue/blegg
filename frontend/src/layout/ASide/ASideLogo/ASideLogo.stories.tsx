import type { Meta, StoryObj } from "@storybook/react";

import ASideLogo from "./ASideLogo";

const meta = {
  title: "Layout/ASideLogo",
  component: ASideLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof ASideLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
