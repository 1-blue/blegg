import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip";

const meta = {
  title: "Champion/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    show: {
      description:
        "툴팁을 보여줄지 여부 <br />( 실제로는 마우스 이벤트에 의해 결정됨 )",
    },
    title: { description: "스킬 이름" },
    description: { description: "스킬 설명" },
  },
  decorators: [
    (Story) => (
      <div className="relative mt-40 pb-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
    title: "강철의 외교관",
    description:
      "뽀삐가 던진 방패가 대상을 맞히고 튕겨나갑니다. 뽀삐는 방패를 다시 주워 일시적인 보호막 효과를 얻을 수 있습니다.  ",
  },
};
