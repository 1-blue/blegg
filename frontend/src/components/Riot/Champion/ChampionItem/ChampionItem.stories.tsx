import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocItems } from "@src/libs";

import ChampionItem from "./ChampionItem";

const meta = {
  title: "Riot/Champion/ChampionItem",
  component: ChampionItem,
  tags: ["autodocs"],
  argTypes: {
    id: { description: `해당 아이템의 ID ( 식별자, Riot API에서 제공 )` },
    initialData: {
      description: `React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값<br />( <a href="https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/item.json" target="_blank">Riot Item API</a> )`,
    },
  },
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <Story />
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof ChampionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 3091,
    initialData: mocItems[0],
  },
};
