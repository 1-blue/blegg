import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocSummonerRecords } from "@src/libs";

import SummonerRecord from "./SummonerRecord";

const meta = {
  title: "Riot/Summoner/SummonerRecord",
  component: SummonerRecord,
  argTypes: {
    match: {
      description:
        "특정 경기에 대한 정보 ( 스펠/아이템은 챔피언 정보를 얻어오고 나서 다시 패치하기 때문에 서버가 없으면 정보를 얻을 수 없음 )",
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
} satisfies Meta<typeof SummonerRecord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    match: mocSummonerRecords[0],
  },
};
