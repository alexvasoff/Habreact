import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import 'webpack-dev-server';
import {buildWebpackServer} from "./buildWebpackServer";
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[contenthash].main.js',
            path: paths.output,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildWebpackServer(options) : undefined,
    };
}