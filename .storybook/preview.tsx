import "../src/index.css";

import type { Preview } from "@storybook/react";
import React from "react";

import { Theme } from "../src/common/Theme/Theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
