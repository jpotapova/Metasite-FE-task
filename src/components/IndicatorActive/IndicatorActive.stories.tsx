import type { Meta, StoryObj } from "@storybook/react";

import { IndicatorActive } from "./IndicatorActive";

const meta = {
  title: "Components/IndicatorActive",
  component: IndicatorActive,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple active status indicator that inherits its color from the parent element. Can be used to show active/inactive states in various contexts. When inactive (isOn=false), the component renders nothing (returns null).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IndicatorActive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    isOn: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Indicator showing active status.",
      },
    },
  },
};

export const Dark: Story = {
  args: {
    isOn: true,
    theme: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: "Indicator showing active status.",
      },
    },
  },
};

export const Inactive: Story = {
  args: {
    isOn: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Inactive state - nothing is rendered. This component returns null when isOn is false.",
      },
    },
  },
};
