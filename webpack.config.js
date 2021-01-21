const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    // Entry files
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    // mode can be dev or prod
    mode: "development",
    // here you can set output files name for example hash, id ...etc
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // here you can show file extension an the you can import not showing file extension
    resolve: {
        extensions: ['.js', '.json', '.xml', '.png', '.csv', '.css' ],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    // this optimization won't let to boiler plate for example double time use jquery in analytics.js an main.js
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // Plugins Clean and HTML
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // Here you can show webpack loaders
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
};