import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocSummonerRecords } from "@src/libs";

import SummonerRecords from "./SummonerRecords";

const meta = {
  title: "Riot/Summoner/SummonerRecords",
  component: SummonerRecords,
  argTypes: {
    name: {
      description:
        "최근 전적을 검색할 유저 이름 ( 스펠/아이템은 챔피언 정보를 얻어오고 나서 다시 패치하기 때문에 서버가 없으면 정보를 얻을 수 없음 )",
    },
    initialDatas: {
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
} satisfies Meta<typeof SummonerRecords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Akaps",
    initialDatas: [mocSummonerRecords],
  },
};
