import type { Meta, StoryObj } from "@storybook/react";

import SingleImage from "./SingleImage";

const meta = {
  title: "FormToolkit/SingleImage",
  component: SingleImage,
  argTypes: {
    id: { description: "label의 이름" },
    setImage: { description: "이미지 값을 넣을 setter 함수 ( File )" },
    imageURL: { description: "기본 이미지" },
    labelHidden: { description: "라벨 숨기기" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SingleImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { id: "썸네일" } };
