import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocPosts } from "@src/libs";

import Posts from "./Posts";

const meta = {
  title: "Profile/Posts",
  component: Posts,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <div className="min-w-[50vw]">
          <Story />
        </div>
      </MyReactQueryProvider>
    ),
  ],
  argTypes: {
    label: { description: "컴포넌트 이름" },
    posts: { description: "useInfiniteQuery를 통해 얻은 게시글 데이터" },
    fetchNextPage: {
      description: "다음 페이지 존재 여부 ( useInfiniteQuery )",
    },
    hasNextPage: { description: "다음 페이지 패치 ( useInfiniteQuery )" },
    isFetching: {
      description: "다음 페이지 패치중인지 여부 ( useInfiniteQuery )",
    },
    isLoading: {
      description: "첫 페이지 패치중인지 여부 ( useInfiniteQuery )",
    },
  },
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "작성한 게시글",
    posts: {
      pageParams: [],
      pages: [mocPosts],
    },
    isFetching: false,
    isLoading: false,
  },
};
