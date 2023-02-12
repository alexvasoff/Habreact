import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolve(options: BuildOptions): webpack.ResolveOptions {
    return {
        mainFiles: ['index'],
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}