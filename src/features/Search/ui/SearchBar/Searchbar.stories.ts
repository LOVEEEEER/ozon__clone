import { Meta, StoryObj } from "@storybook/react";
import { Searchbar } from "./Searchbar";

const meta = {
  title: "features/Searchbar",
  component: Searchbar
} satisfies Meta<typeof Searchbar>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}