import { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import { within } from "@storybook/test";
import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/test";

const meta = {
  title: "Form",
  component: Form,
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const Testing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await expect(input).toHaveTextContent("");
    await userEvent.type(input, "Hello World!!!");
    await expect(
      canvas.getByDisplayValue("Hello World!!!")
    ).toBeInTheDocument();
  },
};
