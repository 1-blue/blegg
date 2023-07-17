import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import CommentForm from "./CommentForm";

const meta = {
  title: "Community/CommentForm",
  component: CommentForm,
  tags: ["autodocs"],
  argTypes: {
    postIdx: { description: "게시글 식별자" },
  },
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <div className="w-[80vw]">
          <Story />
        </div>
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { postIdx: -1 } };
