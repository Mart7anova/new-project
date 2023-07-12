import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        //для покл всех html
        new HtmlWebpackPlugin({
            //ищпользовать html из public как шаблон
            //чтобы каждый раз не создавать заново
            template: paths.html
        }),        //показывает время сборки
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}
