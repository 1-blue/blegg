import type { Meta, StoryObj } from "@storybook/react";

import SkillBox from "./SkillBox";

const meta = {
  title: "Champion/SkillBox",
  component: SkillBox,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["P", "Q", "W", "E", "R"],
      control: { type: "select" },
      description: "좌측 상단 스킬 키 설명",
    },
    src: { description: "스킬 이미지 src" },
    alt: { description: "스킬 이미지 alt" },
    title: { description: "tooltip에 사용할 스킬 이름" },
    description: { description: "tooltip에 사용할 스킬 설명" },
  },
  decorators: [
    (Story) => (
      <div className="w-full h-screen flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SkillBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "P",
    src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/passive/Poppy_Passive.png",
    alt: "강철의 외교관 ( 뽀삐 패시브 )",
    title: "강철의 외교관",
    description:
      "뽀삐가 던진 방패가 대상을 맞히고 튕겨나갑니다. 뽀삐는 방패를 다시 주워 일시적인 보호막 효과를 얻을 수 있습니다.",
  },
};
