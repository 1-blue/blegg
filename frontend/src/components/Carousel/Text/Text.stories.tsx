import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
  title: "Carousel/Text",
  component: Text,
  argTypes: {
    custom: { description: "몇 번째 순서인지 ( 순차적 애니메이션을 위함 )" },
    main: { description: "메인 텍스트" },
    sub: { description: "서브 텍스트" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    custom: 1,
    main: "공격력: 64",
    sub: "4",
  },
};
