import type { Meta, StoryObj } from "@storybook/react";

import ASideSearch from "./ASideSearch";

const meta = {
  title: "Layout/ASideSearch",
  component: ASideSearch,
  tags: ["autodocs"],
} satisfies Meta<typeof ASideSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
