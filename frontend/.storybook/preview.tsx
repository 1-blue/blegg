import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../src/css/tailwind.css";
import "../src/css/font.css";

import type { Decorator, Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen", // padding: 1rem 제거 ( padded ) ( https://storybook.js.org/docs/react/configure/story-layout )
  },
};

/** global decorator */
export const decorators: Decorator[] = [
  (Story) => {
    return (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    );
  },
];

export default preview;
