import type { Meta, StoryObj } from "@storybook/react";

import NavBarProvider from "@src/contexts/NavBar";

import { type RouterElement, routerElements } from "@src/router";

import NavLink from "./NavLink";

const meta = {
  title: "Layout/NavLink",
  component: NavLink,
  argTypes: {
    path: { description: "이동할 경로" },
    icon: { description: "아이콘 [안채워짐, 채워짐]" },
    label: { description: "사용할 이름" },
    isActive: { description: "현재 경로와 일치하는지에 대한 값" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <NavBarProvider>
        <Story />
      </NavBarProvider>
    ),
  ],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

type RequiredRouterElement = Required<RouterElement>;

/** 네비게이션 바에서 보여주는 것만 필터링 */
const routers = routerElements
  .filter((v): v is RequiredRouterElement => !!v.icon)
  .filter((v): v is RequiredRouterElement => !!v.label);

export const Home: Story = {
  args: {
    path: routers[0].path,
    icon: routers[0].icon,
    label: routers[0].label,
    isActive: false,
  },
};
export const Champion: Story = {
  args: {
    path: routers[1].path,
    icon: routers[1].icon,
    label: routers[1].label,
    isActive: true,
  },
};
export const Player: Story = {
  args: {
    path: routers[2].path,
    icon: routers[2].icon,
    label: routers[2].label,
    isActive: false,
  },
};
export const Community: Story = {
  args: {
    path: routers[3].path,
    icon: routers[3].icon,
    label: routers[3].label,
    isActive: true,
  },
};
export const SignIn: Story = {
  args: {
    path: routers[4].path,
    icon: routers[4].icon,
    label: routers[4].label,
    isActive: false,
  },
};
export const SignUp: Story = {
  args: {
    path: routers[5].path,
    icon: routers[5].icon,
    label: routers[5].label,
    isActive: false,
  },
};
export const Info: Story = {
  args: {
    path: routers[6].path,
    icon: routers[6].icon,
    label: routers[6].label,
    isActive: false,
  },
};
