import { Meta, StoryObj } from "@storybook/react";
import { Anchor, AnchorThemes } from "./Anchor";
import testIcon from "@/shared/assets/icons/catalog.svg";

const meta = {
  title: "shared/Anchor",
  component: Anchor,
} satisfies Meta<typeof Anchor>

export default meta

type Story = StoryObj<typeof meta>;

export const Grey: Story = {
  args: {
    children: "Test",
    to: "/"
  }
}

export const Dark: Story = {
  args: {
    children: "Test",
    theme: AnchorThemes.DARK,
    to: "/"
  }
}

export const withBeforeTextIconRow: Story = {
  args: {
    children: "Test Anchor",
    to: "/",
    beforeTextIcon: testIcon
  }
}

export const withAfterTextIconRow: Story = {
  args: {
    children: "Test Anchor",
    to: "/",
    afterTextIcon: testIcon
  }
}
