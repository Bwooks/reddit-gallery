var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/views/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/views/bundle/')
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: path.resolve(__dirname,'node_modules'),
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.jsx','.js']
    }
};