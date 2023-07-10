import type { Meta, StoryObj } from "@storybook/react";

import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";
import NavBarProvider from "@src/contexts/NavBar";

import Nav from "./Nav";

const meta = {
  title: "Layout/Nav",
  component: Nav,
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
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
