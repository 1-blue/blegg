import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import SummonerInfo from "./SummonerInfo";

const meta = {
  title: "Riot/Summoner/SummonerInfo",
  component: SummonerInfo,
  argTypes: {
    name: { description: "최근 전적을 검색할 소환사 이름" },
    initialData: {
      description: "React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <Story />
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof SummonerInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Akaps",
    initialData: {
      info: {
        name: "Akaps",
        level: 433,
        profileIconSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/3791.png",
      },
      soloRank: {
        tier: "MASTER",
        rank: "I",
        leaguePoints: 26,
        wins: 396,
        losses: 395,
      },
    },
  },
};
