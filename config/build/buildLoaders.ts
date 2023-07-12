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

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            //создаёт стили из js сток
            'style-loader',
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
