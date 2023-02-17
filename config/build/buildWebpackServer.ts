import type { Configuration as DevServConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildWebpackServer(options: BuildOptions): DevServConfiguration {
  return {
    port: options.port,
    historyApiFallback: true,
    hot: true,
  };
}
