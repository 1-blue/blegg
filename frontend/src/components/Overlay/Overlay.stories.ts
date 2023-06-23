import type { Meta, StoryObj } from "@storybook/react";

import Overlay from "./Overlay";

const meta = {
  title: "Common/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  argTypes: {
    show: { description: "렌더링 여부" },
    onCloseOverlay: { description: "닫는 함수" },
  },
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
  },
};
