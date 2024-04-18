import { Configuration } from "webpack";
import { BuildOptions } from "./types/options";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash:8].js",
      clean: true
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer(options),
    module: {
      rules: buildLoaders()
    },
    plugins: buildPlugins(options)
  }
}