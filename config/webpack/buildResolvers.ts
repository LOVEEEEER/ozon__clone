import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/options";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    modules: ["node_modules"],
    mainFields: [options.paths.entry]
  }
}