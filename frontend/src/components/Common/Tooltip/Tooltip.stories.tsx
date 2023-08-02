import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip";

const meta = {
  title: "Common/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    show: true,
    title: "망치 강타",
    description:
      "뽀삐가 땅을 힘껏 내려쳐 <physicalDamage>(?)</physicalDamage>+최대 체력의 <physicalDamage>9%에 해당하는 물리 피해</physicalDamage>를 입히고 지대를 불안정하게 만듭니다. <br /><br />불안정한 지대는 적을 20/25/30/35/40% <status>둔화</status>시키고 1초 뒤 폭발하여 <physicalDamage>(?)</physicalDamage>+최대 체력의 <physicalDamage>9%에 해당하는 물리 피해</physicalDamage>를 입힙니다.(?)<br /><br />사거리: 430<br />소모값: 35/40/45/50/55<br />재사용 대기시간: 8/7/6/5/4",
  },
  argTypes: {
    show: {
      description:
        "툴팁을 보여줄지 여부 <br />( 실제로는 마우스 이벤트에 의해 결정됨 )",
    },
    title: { description: "스킬 이름" },
    description: { description: "스킬 설명" },
    horizon: {
      options: ["left", "center", "right"],
      control: { type: "select" },
      description: "보여줄 가로 방향",
    },
    vertical: {
      options: ["top", "center", "bottom"],
      control: { type: "select" },
      description: "보여줄 세로 방향",
    },
  },
  decorators: [
    (Story) => (
      <div className="relative w-20 h-20 bg-main-400 z-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopLeft: Story = { args: { vertical: "top", horizon: "left" } };
export const TopCenter: Story = {
  args: { vertical: "top", horizon: "center" },
};
export const TopRight: Story = { args: { vertical: "top", horizon: "right" } };
export const CenterLeft: Story = {
  args: { vertical: "center", horizon: "left" },
};
export const CenterCenter: Story = {
  args: { vertical: "center", horizon: "center" },
};
export const CenterRight: Story = {
  args: { vertical: "center", horizon: "right" },
};
export const BottomLeft: Story = {
  args: { vertical: "bottom", horizon: "left" },
};
export const BottomCenter: Story = {
  args: { vertical: "bottom", horizon: "center" },
};
export const BottomRight: Story = {
  args: { vertical: "bottom", horizon: "right" },
};
