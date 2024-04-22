import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";
import { buildSassLoader } from "../config/webpack/loaders/buildSassLoader";
import { buildSvgLoader } from "../config/webpack/loaders/buildSvgLoader";
import { buildFileLoader } from "../config/webpack/loaders/buildFileLoader";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  webpackFinal: (config: Configuration) => {
    const isDev = true
    config.module!.rules = config.module?.rules?.filter((item: any) => item.type !== "asset/resource");
    config.module?.rules?.push(buildSassLoader(isDev));
    config.module?.rules?.push(buildSvgLoader());
    config.module?.rules?.push(buildFileLoader());
    // @ts-ignore
    config.resolve!.alias!["@"] = path.resolve(__dirname, "../src");
    return config;
  }
};
export default config;
