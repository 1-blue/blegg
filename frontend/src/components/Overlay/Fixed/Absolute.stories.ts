import type { Meta, StoryObj } from "@storybook/react";

import Fixed from "./Fixed";

const meta = {
  title: "Overlay/Fixed",
  component: Fixed,
  argTypes: {
    show: { description: "렌더링 여부" },
    onCloseOverlay: { description: "닫는 함수" },
    className: { description: "TailwindCss className" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Fixed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
    className: "flex justify-center items-center bg-main-400/80",
  },
};
