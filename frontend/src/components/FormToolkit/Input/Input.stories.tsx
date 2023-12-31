import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "FormToolkit/Input",
  component: Input,
  tags: ["autodocs"],

  argTypes: {
    id: { description: "label의 이름" },
    info: { description: "정보 메시지" },
    warning: { description: "경고 메시지" },
    error: { description: "에러 메시지" },
    labelHidden: { description: "라벨 숨기기" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { id: "입력창" } };
export const Info: Story = {
  args: { id: "휴대폰 번호", info: "인증되었습니다." },
};
export const Warning: Story = {
  args: { id: "비밀번호", warning: "입력 조건을 확인해주세요!" },
};
export const Error: Story = {
  args: { id: "아이디", error: "이미 사용중인 아이디입니다!" },
};
