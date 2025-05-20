import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper around Material-UI's Checkbox component that provides a simplified interface and additional theming options. This component combines MUI's Checkbox with FormControlLabel for a complete checkbox input experience.",
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Don't apply dark background for contextual theme
      if (context.args.theme === "contextual") {
        return <Story />;
      }
      return (
        <div style={{ padding: "20px", backgroundColor: "#333" }}>
          <Story />
        </div>
      );
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    isChecked: false,
    label: "Default checkbox",
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    label: "Checked checkbox",
  },
};

export const Primary: Story = {
  args: {
    isChecked: false,
    label: "Primary theme checkbox",
    theme: "primary",
  },
};

export const Contextual: Story = {
  args: {
    isChecked: false,
    label: "Contextual theme checkbox",
    theme: "contextual",
  },
};

export const WithCustomLabel: Story = {
  args: {
    isChecked: false,
    label: <span style={{ fontWeight: "bold" }}>Custom styled label</span>,
  },
};
