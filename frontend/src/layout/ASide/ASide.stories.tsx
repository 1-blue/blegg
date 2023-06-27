import type { Meta, StoryObj } from "@storybook/react";

import NavBarProvider from "@src/contexts/NavBar";

import ASide from "./ASide";

const meta = {
  title: "Layout/ASide",
  component: ASide,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <NavBarProvider>
        <Story />
      </NavBarProvider>
    ),
  ],
} satisfies Meta<typeof ASide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
