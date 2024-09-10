import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      options: ["Primaryボタン", "Secondaryボタン"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primaryボタン",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondaryボタン",
    primary: false,
  },
};
