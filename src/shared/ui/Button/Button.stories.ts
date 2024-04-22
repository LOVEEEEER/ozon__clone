import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import TestIcon from "../../assets/icons/storybook/test-icon.svg";

const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Test"
  }
}

export const withIcon: Story = {
  args: {
    icon: TestIcon,
    children: "Test"
  }
}