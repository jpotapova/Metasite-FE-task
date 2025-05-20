import type { Meta, StoryObj } from "@storybook/react";

import { IndicatorProgress } from "./IndicatorProgress";

const meta = {
  title: "Components/IndicatorProgress",
  component: IndicatorProgress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A progress indicator that visualizes the completion status of a process or task. Supports different sizes and variants.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IndicatorProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  parameters: {
    docs: {
      description: {
        story: "Indeterminate loading indicator",
      },
    },
  },
};
