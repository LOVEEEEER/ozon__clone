import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeThemes } from "./Badge";

const memo = {
  title: "shared/Badge",
  component: Badge,
  argTypes: {}
} satisfies Meta<typeof Badge>

export default memo;

type Story = StoryObj<typeof memo>;

export const Grey: Story = {
  args: {
    text: "Test",
    theme: BadgeThemes.GREY,
    onClick: () => 123
  }
}