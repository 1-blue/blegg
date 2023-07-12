import type { Meta, StoryObj } from "@storybook/react";

import { mocPostWithUser } from "@src/libs";

import Post from "./Post";

const meta = {
  title: "Community/Post",
  component: Post,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <div className="list-none">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    idx: { description: "게시글 식별자" },
    title: { description: "게시글 제목" },
    content: { description: "게시글 내용" },
    thumbnail: { description: "게시글 썸네일 URL" },
    viewCount: { description: "게시글 조회수" },
    createdAt: { description: "게시글 생성 시간" },
    updatedAt: { description: "게시글 수정 시간" },
    userIdx: { description: "게시글 작성자 식별자" },
    user: {
      description: "게시글 작성자 정보 ( 식별자, 아바타, 이름, 소환사 이름 )",
    },
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { ...mocPostWithUser } };
