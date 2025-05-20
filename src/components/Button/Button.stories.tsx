import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A wrapper component around Material-UI Button that provides a simplified interface for common button use cases.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["button", "submit"],
      description: "The type of the button",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    type: "button",
  },
};

export const Submit: Story = {
  args: {
    children: "Submit Button",
    type: "submit",
  },
};
