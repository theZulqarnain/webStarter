const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpack = require("webpack")
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '',
        // sourceMapFilename: "./bundle.js.map",
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        headers: {
            "Content-Length": "1000000"
        },
        inline: true,
        port: 10001,
        // proxy: {
        //     '/api': {
        //         target: {
        //             host: "0.0.0.0",
        //             protocol: 'http:',
        //             port: 10000
        //         },
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + '/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    // ],
        // plugins: [
    //     new UglifyJsPlugin({
    //         uglifyOptions: {
    //             compress: {
    //                 properties: true
    //             }
    //         },
    //     include: /\.min\.js$/,
    //     minimize: true
    // })
// ],

    // }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
]
};