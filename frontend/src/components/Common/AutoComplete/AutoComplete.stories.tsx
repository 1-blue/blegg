import type { Meta, StoryObj } from "@storybook/react";

import AutoComplete from "./AutoComplete";

const meta = {
  title: "Common/AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <div className="relative w-[400px] bg-main-400 h-10 flex justify-center items-center">
        <span>대충 검색창이라고 가정</span>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    baseURL: { description: "이동할 URL" },
    isShow: { description: "렌더링 여부" },
    items: { description: "렌더링할 요소" },
    onClearOne: { description: "특정 최근 검색어 제거 이벤트" },
    onClearAll: { description: "모든 최근 검색어 제거 이벤트" },
    queryString: { description: "첨부할 query-string" },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    baseURL: "/",
    isShow: true,
    items: ["대충", "아무", "거나 테스트"],
  },
};
