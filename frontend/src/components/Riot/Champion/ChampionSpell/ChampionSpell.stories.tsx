import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

import { mocSpells } from "@src/libs";

import ChampionSpell from "./ChampionSpell";

const meta = {
  title: "Riot/Champion/ChampionSpell",
  component: ChampionSpell,
  tags: ["autodocs"],
  argTypes: {
    spellKey: { description: "해당 스펠의 key ( 식별자, Riot API에서 제공 )" },
    initialData: {
      description: `React-Query를 컴포넌트에서 사용하는 경우 StoryBook 위한 값<br />( <a href="https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/summoner.json" target="_blank">Riot Item API</a> )`,
    },
  },
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <Story />
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof ChampionSpell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flash: Story = {
  args: {
    spellKey: 4,
    initialData: mocSpells[0],
  },
};
export const Teleport: Story = {
  args: {
    spellKey: 12,
    initialData: mocSpells[1],
  },
};
