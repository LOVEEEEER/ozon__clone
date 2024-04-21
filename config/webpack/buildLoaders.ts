import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/options";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
                ? "[path][name]__[local]--[hash:base64:5]"
                : "[hash:base64:8]",
        },
      },
    },
    "sass-loader"
  ],
  };
  
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  return [sassLoader, typescriptLoader, fileLoader, svgrLoader]
}