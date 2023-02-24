import path = require('path');
import webpack from 'webpack';
import { BuildMode, BuildOptions, BuildPaths } from '../build/types/config';
import { buildResolve } from '../build/buildResolve';
import { buildLoaders } from '../build/buildLoaders';

export default function webpackConfig({ config }: {config: webpack.Configuration}) {
  const paths: BuildPaths = {
    entry: '',
    htmlTemplate: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  const options: BuildOptions = {
    mode: 'development',
    paths,
    isDev: true,
    port: 3001,
  };

  config.resolve = buildResolve(options);
  config.module.rules = buildLoaders(options);

  return config;
}
