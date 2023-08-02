import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";
import NavBarProvider from "@src/contexts/NavBar";

import ASide from "./ASide";

const meta = {
  title: "Layout/ASide",
  component: ASide,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MyReactQueryProvider>
        <NavBarProvider>
          <Story />
        </NavBarProvider>
      </MyReactQueryProvider>
    ),
  ],
} satisfies Meta<typeof ASide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
