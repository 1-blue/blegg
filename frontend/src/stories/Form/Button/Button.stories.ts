import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XS: Story = { args: { size: "xs" } };
export const SM: Story = { args: { size: "sm" } };
export const BASE: Story = { args: { size: "base" } };
export const MD: Story = { args: { size: "md" } };
export const LG: Story = { args: { size: "lg" } };
export const XL: Story = { args: { size: "xl" } };
export const XL2: Story = { args: { size: "2xl" } };
export const XL3: Story = { args: { size: "3xl" } };
export const XL4: Story = { args: { size: "4xl" } };
