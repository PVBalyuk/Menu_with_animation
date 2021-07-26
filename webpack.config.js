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
                test: /\.(png|jpg|svg|gif)$/i,
                use: ['file-loader'],
            }
        ]
    }
}
