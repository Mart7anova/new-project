import webpack from "webpack";

//конфигурация лоудеров
//нужны для обработки файлов которые выходят за рамки js
//png,jpeg,css

export function buildLoaders(): webpack.RuleSetRule[] {

    const typeScriptLoader = {
        //загрузит все файлы .ts и .tsx
        test: /\.tsx?$/,
        // через ts-loader
        use: 'ts-loader',
        //исключая
        exclude: /node_modules/,
    }

    return [
        typeScriptLoader,
    ]
}
