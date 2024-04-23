import type { Preview } from "@storybook/react";
import {StyleDecorator} from "../src/shared/config/storybook/StyleDecorator";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, StyleDecorator]
};

export default preview;
