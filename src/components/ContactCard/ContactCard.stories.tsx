import type { Decorator,Meta, StoryObj } from "@storybook/react";

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

const withWrapper: Decorator = (Story) => (
  <div style={{ width: "300px" }}>
    <Story />
  </div>
);

export const Default: Story = {
  args: {
    isLoading: false,
    isError: false,
    isUninitialized: false,
    contact: {
      id: "1",
      displayName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      city: "Springfield",
      isActive: true,
    },
  },
  decorators: [withWrapper],
};

export const NoContact: Story = {
  args: {
    contact: undefined,
    isLoading: false,
    isError: false,
    isUninitialized: true,
  },
  decorators: [withWrapper],
};

export const LoadingContact: Story = {
  args: {
    contact: undefined,
    isLoading: true,
    isError: false,
    isUninitialized: false,
  },
  decorators: [withWrapper],
};

export const ErrorLoading: Story = {
  args: {
    contact: undefined,
    isLoading: false,
    isError: true,
    isUninitialized: false,
  },
  decorators: [withWrapper],
};
