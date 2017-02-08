const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    target: 'web',
    watch: true,
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        inline: true,
        port: 4000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', { "modules": false }],
                                    'react'
                            ]
                        }
                    }
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            }
        ]
    }
};