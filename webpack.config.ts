import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildPaths } from './config/webpack/types/options';

export default () => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public/index.html')
  }
  const port = 3000;
  const config = buildWebpackConfig({
    paths,
    port
  });
  return config;
}