import type { Meta, StoryObj } from "@storybook/react";

import Arrow from "./Arrow";

const meta = {
  title: "Carousel/Arrow",
  component: Arrow,
  tags: ["autodocs"],
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
