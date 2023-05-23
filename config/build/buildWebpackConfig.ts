import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {mode, paths} = options

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
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
