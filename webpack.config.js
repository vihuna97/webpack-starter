const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpack = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: "development",

    output:{
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
            
        ]
    },

    optimization: {},
    plugins: [
        new htmlWebpack(
            {
                title: 'My webpack app',
                filename: 'index.html',
                template: './src/index.html',
                inject: 'body'
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false }),
        new copyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
            
        }),
        ], 
}