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

    // https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",

    // https://storybook.js.org/docs/react/essentials/backgrounds
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#080F25",
        },
      ],
    },
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
