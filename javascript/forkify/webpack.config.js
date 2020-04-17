const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/**
 * 1. enrypoint
 * 2. output
 * 3. loaders
 * 4. plughins
 */
module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    //loader
    module: {
        rules: [
            {
                test: /\.js$/,     // regular expression of all js files
                exclude: /node_modules/, // excluding this folder
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}