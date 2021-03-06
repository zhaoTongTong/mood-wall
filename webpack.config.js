const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  // entry: __dirname + '/src/index.js',
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'   //模板html路径
    }),
    new webpack.HotModuleReplacementPlugin()  // 热更新
    ],


  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    hot: true,  // 热更新
    inline: true//实时刷新
  }
}