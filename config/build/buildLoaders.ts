import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

//конфигурация лоудеров
//нужны для обработки файлов которые выходят за рамки js
//png,jpeg,css

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options

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
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            //транслирует css в CommonJS
            {
                loader: 'css-loader',
                options: {
                    // для использования css modules
                    modules: {
                        auto: (resPath: string)=>resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]'
                    }
                }
            },
            //преобразовывает sass в css
            'sass-loader',
        ]
    }

    return [
        typeScriptLoader,
        cssLoader,
    ]
}
