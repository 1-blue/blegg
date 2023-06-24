import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "..";
import Single from "./Single";
import Overlay from "@src/components/Overlay";

const champion = {
  name: "뽀삐",
  title: "망치의 수호자",
  info: {
    attack: 6,
    defense: 7,
    magic: 2,
    difficulty: 6,
  },
  stats: {
    hp: 610,
    hpperlevel: 104,
    mp: 280,
    mpperlevel: 40,
    movespeed: 345,
    armor: 38,
    armorperlevel: 4.7,
    spellblock: 32,
    spellblockperlevel: 2.05,
    attackrange: 125,
    hpregen: 8,
    hpregenperlevel: 0.8,
    mpregen: 7,
    mpregenperlevel: 0.7,
    crit: 0,
    critperlevel: 0,
    attackdamage: 64,
    attackdamageperlevel: 4,
    attackspeedperlevel: 2.5,
    attackspeed: 0.625,
  },
};

const { name, title, info, stats } = champion;

const meta = {
  title: "Carousel/Single",
  component: Single,
  argTypes: {
    src: { description: "Carousel에서 사용할 이미지 경로" },
    next: { description: "다음 이미지 이동 함수" },
    prev: { description: "이전 이미지 이동 함수" },
    children: {
      description:
        "여러 이미지를 등록하는 방식이 아니라서 표현하기가 힘들어서 단일 이미지만 렌더링함",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Single>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg`,
    children: (
      <Overlay.Absolute className="bg-gradient-to-b from-black/0 to-black/80">
        <Carousel.Caption main={name} sub={title} />
        <Carousel.ChampionInfo info={info} stats={stats} />
      </Overlay.Absolute>
    ),
  },
};
