import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

//конфигурация лоудеров
//нужны для обработки файлов которые выходят за рамки js
//png,jpeg,css

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const typeScriptLoader = {
        //загрузит все файлы .ts и .tsx
        test: /\.tsx?$/,
        // через ts-loader
        use: 'ts-loader',
        //исключая
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            //создаёт стили из js сток
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            //транслирует css в CommonJS
            'css-loader',
            //преобразовывает sass в css
            'sass-loader',
        ]
    }

    return [
        typeScriptLoader,
        cssLoader,
    ]
}
