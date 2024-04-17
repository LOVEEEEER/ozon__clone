import HtmlWebpackPlugin from "html-webpack-plugin";
import { HotModuleReplacementPlugin,
   ProgressPlugin,
    WebpackPluginInstance
} from "webpack";
import { BuildOptions } from "./types/options";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new HotModuleReplacementPlugin()
  ]
}