const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    entry: resolve(__dirname, 'src/main.js'),
    output: {
        // filename: 'main.bundle.js'
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].[contenthash].css`
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.(png|jpe?g|gif|mp3)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[path][name].[ext]',
            //     }
            // }
            {
                test: /\.(mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    //  outputPath: 'images',
                },
            }
        ]
    },
    devServer: {
        port: 3000
    }
}