import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Select is a wrapper around Material UI Select component that applies consistent styling. It simplifies the API of the underlying MUI component while maintaining its core functionality.",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "uk", label: "United Kingdom" },
      { value: "au", label: "Australia" },
    ],
    value: "",
    onChange: () => undefined,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const WithSelectedValue: Story = {
  args: {
    label: "Country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "uk", label: "United Kingdom" },
      { value: "au", label: "Australia" },
    ],
    value: "uk",
    onChange: () => undefined,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
