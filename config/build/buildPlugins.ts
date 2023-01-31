import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new MiniCssExtractPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
                template: paths.htmlTemplate
            }
        )
    ]
}