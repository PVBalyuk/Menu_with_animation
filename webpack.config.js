const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: {
        main: './assets/javascript/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader','sass-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                dependency: { not: ['url'] },
                use: ['url-loader'],
            }
        ]
    }
}
