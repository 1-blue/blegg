import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocDetailChampion } from "@src/libs";

import ChampionCard from "./ChampionCard";

const meta = {
  title: "Riot/Champion/ChampionCard",
  component: ChampionCard,
  tags: ["autodocs"],
  argTypes: {
    name: { description: "챔피언 이름" },
    initialData: {
      description: `React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값<br />( <a href="https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/champion/Poppy.json" target="_blank">Riot Champion API</a> )`,
    },
  },
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <Story />
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof ChampionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Poppy",
    initialData: mocDetailChampion,
  },
};
