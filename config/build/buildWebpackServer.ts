import {BuildOptions} from "./types/config";
import type { Configuration as DevServConfiguration } from 'webpack-dev-server';
export function buildWebpackServer(options: BuildOptions): DevServConfiguration {
    return {
        port: options.port,
        static: options.paths.output,
    }
}