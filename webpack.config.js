
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: __dirname + "/entry.js"
    },
    output: {
        path: path.resolve(__dirname, "__build__"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jsp|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500000
                    }
                }]
            }
        ],
    },
    devServer: {
        publicPath: '/',
        inline: true,
        open: true, // 自动拉起浏览器
        hot: true // 热加载
    },
    //入口文件配置，根据路径自行修改
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
};
