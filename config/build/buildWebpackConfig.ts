import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {mode, paths, isDev} = options

    return {
        //в продакшене удаляется всё лишнее (минификация)
        mode,
        //стартовая точка приложения
        entry: paths.entry,
        //куда и как делать сборку приложения
        output: {
            //имя файла name→entry contenthash→уникальное имя
            filename: '[name].[contenthash].js',
            //папка
            path: paths.build,
            //удаление ненужных файлов
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
