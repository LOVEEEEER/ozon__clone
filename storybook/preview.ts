import type { Preview } from "@storybook/react";
import {StyleDecorator} from "../src/shared/config/storybook/StyleDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator]
};

export default preview;
