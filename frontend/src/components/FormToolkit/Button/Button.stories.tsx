import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "FormToolkit/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    label: { description: "버튼 이름" },
    className: { description: "TailwindCss의 className" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "버튼" } };
