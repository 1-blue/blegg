import type { Meta, StoryObj } from "@storybook/react";

import { mocDetailChampion } from "@src/libs";

import Carousel from "..";
import Single from "./Single";
import Overlay from "@src/components/Common/Overlay";

const { name, title, info, stats } = mocDetailChampion;

const meta = {
  title: "Carousel/Single",
  component: Single,
  argTypes: {
    src: { description: "Carousel에서 사용할 이미지 경로" },
    next: { description: "다음 이미지 이동 함수" },
    prev: { description: "이전 이미지 이동 함수" },
    uniqueKey: {
      description:
        "Carousel의 요소를 구분할 key<br />( key가 달라야 새로운 컴포넌트로 인식해서 animation이 발생함 )",
    },
    children: {
      description: `여러 이미지를 등록하는 방식이 아니라서 표현하기가 힘들어서 단일 이미지만 렌더링함<br />( <a href="https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/champion/Poppy.json" target="_blank">특정 챔피언 API</a> )`,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Single>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg`,
    uniqueKey: "keyboardcat",
    children: (
      <Overlay.Absolute className="bg-gradient-to-b from-black/0 to-black/80">
        <Carousel.Caption main={name} sub={title} />
        <Carousel.ChampionInfo info={info} stats={stats} />
      </Overlay.Absolute>
    ),
  },
};
