import type { Meta, StoryObj } from "@storybook/react";

import { getMocDetailChampion } from "@src/libs";

import ChampionSkill from "./ChampionSkill";

const champion = getMocDetailChampion();

const meta = {
  title: "Champion/ChampionSkill",
  component: ChampionSkill,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["P", "Q", "W", "E", "R"],
      control: { type: "select" },
      description: "좌측 상단에 배치될 스킬 키 설명",
    },
    src: { description: "스킬 이미지 src" },
    alt: { description: "스킬 이미지 alt" },
    title: { description: "tooltip에 사용할 스킬 이름" },
    description: { description: "tooltip에 사용할 스킬 설명" },
  },
} satisfies Meta<typeof ChampionSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { ...champion.skills[1] } };
