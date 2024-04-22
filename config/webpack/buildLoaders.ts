import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/options";
import { buildSassLoader } from "./loaders/buildSassLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";
import { buildTypeScriptLoader } from "./loaders/buildTypeScriptLoader";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
  const sassLoader = buildSassLoader(isDev);
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();
  const typescriptLoader = buildTypeScriptLoader();

  return [sassLoader, typescriptLoader, fileLoader, svgLoader];
}