import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import { BuildOptions } from "./types/options";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    hot: true,
    port: options.port
  }
}