import type { Meta, StoryObj } from "@storybook/react";

import Tag from "./Tag";

const meta = {
  title: "Common/Icon/Tag",
  component: Tag,
  args: {
    className: "w-12 h-12 fill-main-400",
  },
  argTypes: {
    tag: {
      options: ["Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"],
      control: { type: "select" },
      description: "Riot API에서 제공해주는 tag들중 하나",
    },
    className: { description: "TailwindCss className" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Assassin: Story = { args: { tag: "Assassin" } };
export const Fighter: Story = { args: { tag: "Fighter" } };
export const Mage: Story = { args: { tag: "Mage" } };
export const Marksman: Story = { args: { tag: "Marksman" } };
export const Support: Story = { args: { tag: "Support" } };
export const Tank: Story = { args: { tag: "Tank" } };
