import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const setDefinePlugin = ({ isDev }: Pick<BuildOptions, 'isDev'>) => {
  return new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  });
};

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    setDefinePlugin({ isDev }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    // https://www.npmjs.com/package/@statoscope/webpack-plugin - альтернатива
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
