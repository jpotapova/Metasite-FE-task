import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "./ErrorMessage";

const meta = {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Something went wrong. Please try again later.",
  },
};
