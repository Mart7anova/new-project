import webpack from "webpack";

export function buildResolvers():webpack.ResolveOptions {
    return {
        //чтобы не указывать расширение при импорте
        //import a from './a' не './a.ts'
        extensions: ['.tsx', '.ts', '.js'],
    }
}
