import type { Meta, StoryObj } from "@storybook/react";

import Animate from "..";
import Text from "./Text";

const meta = {
  title: "Animate/Text",
  component: Text,
  argTypes: {
    main: { description: "메인 텍스트" },
    sub: { description: "서브 텍스트" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Animate.Wrapper>
        <Story />
      </Animate.Wrapper>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { main: "공격력: 64", sub: "4" } };
export const Multi: Story = {
  args: { main: "공격속도: 0.625", sub: "2.5" },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </>
    ),
  ],
};
