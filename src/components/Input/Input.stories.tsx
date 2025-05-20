import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input is a wrapper around Material UI TextField component that applies consistent styling. It simplifies the API of the underlying MUI component while maintaining its core functionality.",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    value: "",
    onChange: () => undefined,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const WithValue: Story = {
  args: {
    label: "Email",
    value: "user@example.com",
    onChange: () => undefined,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
