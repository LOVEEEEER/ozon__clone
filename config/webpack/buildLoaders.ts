import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  return [
    {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ]
}