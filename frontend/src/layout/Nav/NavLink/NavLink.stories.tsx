import type { Meta, StoryObj } from "@storybook/react";

import NavBarProvider from "@src/contexts/NavBar";

import { routerElements } from "@src/router";

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

export const Home: Story = {
  args: {
    path: routerElements[0].path,
    icon: routerElements[0].icon,
    label: routerElements[0].label,
    isActive: false,
  },
};
export const Champion: Story = {
  args: {
    path: routerElements[1].path,
    icon: routerElements[1].icon,
    label: routerElements[1].label,
    isActive: true,
  },
};
export const Player: Story = {
  args: {
    path: routerElements[2].path,
    icon: routerElements[2].icon,
    label: routerElements[2].label,
    isActive: false,
  },
};
export const Community: Story = {
  args: {
    path: routerElements[3].path,
    icon: routerElements[3].icon,
    label: routerElements[3].label,
    isActive: true,
  },
};
export const LogIn: Story = {
  args: {
    path: routerElements[4].path,
    icon: routerElements[4].icon,
    label: routerElements[4].label,
    isActive: false,
  },
};
