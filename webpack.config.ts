import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/webpack/types/options';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public/index.html'),
    src: path.resolve(__dirname, 'src')
  }
  const PORT = env.PORT || 3000;
  const MODE = env.MODE || "development";
  const isDev = MODE === 'development';
  const config = buildWebpackConfig({
    paths,
    port: PORT,
    mode: MODE, 
    isDev
  });
  return config;
}