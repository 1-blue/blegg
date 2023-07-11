import type { Meta, StoryObj } from "@storybook/react";

import { mocUser } from "@src/libs";

import Avatar from "./Avatar";

const meta = {
  title: "Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],

  argTypes: {
    idx: { description: "유저 식별자" },
    avatar: { description: "유저 아바타 URL" },
    nickname: { description: "유저 닉네임" },
    summonerName: { description: "유저 소환사 이름" },
    className: { description: "TailwindCss classname" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { ...mocUser } };
