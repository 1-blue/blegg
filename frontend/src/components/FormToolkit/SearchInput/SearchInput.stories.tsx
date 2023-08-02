import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "./SearchInput";

const meta = {
  title: "FormToolkit/SearchInput",
  component: SearchInput,
  argTypes: {
    baseURL: { description: "이동할 기본 URL" },
    wrapperClassName: { description: "감싸는 엘리먼트의 className" },
    queryString: { description: "첨부할 query-string" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { baseURL: "/summoner" } };
