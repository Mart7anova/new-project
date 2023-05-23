import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
    //в продакшене удаляется всё лишнее (минификация)
    mode: "development",
    //стартовая точка приложения
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    //куда и как делать сборку приложения
    output: {
        //имя файла name→entry contenthash→уникальное имя
        filename: '[name].[contenthash].js',
        //папка
        path: path.resolve(__dirname, 'build'),
        //удаление ненужных файлов
        clean: true
    },
    plugins: [
        //для покл всех html
        new HtmlWebpackPlugin({
            //ищпользовать html из public как шаблон
            //чтобы каждый раз не создавать заново
            template: path.resolve(__dirname, 'public', 'index.html')
        }),        //показывает время сборки
        new webpack.ProgressPlugin(),
    ],
    module: {
        //конфигурация лоудеров
        //нужны для обработки файлов которые выходят за рамки js
        //png,jpeg,css
        rules: [
            {
                //загрузит все файлы .ts и .tsx
                test: /\.tsx?$/,
                // через ts-loader
                use: 'ts-loader',
                //исключая
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        //чтобы не указывать расширение при импорте
        //import a from './a' не './a.ts'
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;
