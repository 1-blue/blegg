import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import Comment from "./Comment";

const meta = {
  title: "Community/Comment",
  component: Comment,
  tags: ["autodocs"],
  argTypes: {
    idx: { description: "댓글 식별자" },
    content: { description: "댓글 내용" },
    createdAt: { description: "댓글 작성 시간" },
    updatedAt: { description: "댓글 수정 시간" },
    userIdx: { description: "작성자 식별자" },
    postIdx: { description: "게시글 식별자" },
    user: { description: "작성자 정보" },
  },
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <div className="list-none flex w-[80vw]">
          <Story />
        </div>
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    idx: 1,
    content: "테스트용 댓글\n😥🫥🐕🐶\n🏅📮🎥\n🍕👏",
    createdAt: new Date("2023-07-16T08:51:38.923Z"),
    updatedAt: new Date("2023-07-17T07:59:37.100Z"),
    userIdx: 10,
    postIdx: 1,
    user: {
      idx: 10,
      avatar: "/images/emblem/challenger.png",
      nickname: "Akaps",
      summonerName: "나의 개발일지",
    },
  },
};
