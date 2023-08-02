import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocPostWithData } from "@src/libs";

import PostInfo from "./PostInfo";

const meta = {
  title: "Community/PostInfo",
  component: PostInfo,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <Story />
      </MyReactQueryProvider>
    ),
  ],
  argTypes: {
    idx: { description: "게시글 식별자" },
    viewCount: { description: "게시글 조회수" },
    user: { description: "게시글 작성자 정보" },
    ratingOfUsers: { description: "게시글 평가 정보" },
  },
} satisfies Meta<typeof PostInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { ...mocPostWithData } };
