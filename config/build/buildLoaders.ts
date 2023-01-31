import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };
    const scssLoader = {
        test: /\.s[ac]ss$/i,
            use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
    ],
    };
    return [
        tsLoader,
        scssLoader,
    ];
}