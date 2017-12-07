var config = {
    entry: './index.js',
    output: {
        path:'/',
        filename: 'index.js',
        sourceMapFilename: "index.map"
    },
    devtool:"#source-map",
    devServer: {
        inline: true,
        port: 8000,
        proxy: {
            '/api': {
                target: {
                    host: "0.0.0.0",
                    protocol: 'http:',
                    port: 8080
                },
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            }
        ]
    }
}
module.exports = config;