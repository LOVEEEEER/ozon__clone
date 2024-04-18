import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/options";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    alias: {
      "@": options.paths.src
    },
    extensions: [".tsx", ".ts", ".js"],
  }
}