import { Configuration } from "webpack";
import { BuildOptions } from "./types/options";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths } = options;
  return {
    mode: "development",
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash:8].js",
      clean: true
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: buildDevServer(options),
    module: {
      rules: buildLoaders()
    },
    plugins: buildPlugins(options)
  }
}