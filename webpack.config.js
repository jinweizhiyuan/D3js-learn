const path = require('path');

module.exports = {
    entry: './src/test.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};