import type { Meta, StoryObj } from "@storybook/react";

import Caption from "./Caption";

const meta = {
  title: "Carousel/Caption",
  component: Caption,
  argTypes: {
    main: { description: "메인 텍스트" },
    sub: { description: "서브 텍스트" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    main: "뽀삐",
    sub: "망치의 수호자",
  },
};
