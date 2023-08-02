import type { Meta, StoryObj } from "@storybook/react";

import NavBarProvider from "@src/contexts/NavBar";

import ASideHamburger from "./ASideHamburger";

const meta = {
  title: "Layout/ASideHamburger",
  component: ASideHamburger,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <NavBarProvider>
        <Story />
      </NavBarProvider>
    ),
  ],
} satisfies Meta<typeof ASideHamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overMedium: true,
    showNavBar: false,
  },
};
