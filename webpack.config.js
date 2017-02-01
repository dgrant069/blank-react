// import path from 'path';

module.exports = {
    debug: true,
    devtool: 'eval-source-map',
    noInfo: false,
    entry: "./src/index.js",
    target: 'web',
    output: {
        path: "./public",
        filename: "index.js"
    },
    devServer: {
        contentBase: './public',
        inline: true,
        port: 4000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
};
