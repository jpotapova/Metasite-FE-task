import type { Meta, StoryObj } from "@storybook/react";

import { ContactCard } from "./ContactCard";

const meta = {
  title: "Components/ContactCard",
  component: ContactCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contact: {
      id: "1",
      displayName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      city: "Springfield",
      isActive: true,
    },
  },
};

export const NoContact: Story = {
  args: {
    contact: undefined,
  },
};
