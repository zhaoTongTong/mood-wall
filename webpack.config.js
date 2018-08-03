const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  // entry: __dirname + '/src/index.js',
  entry: [
    // 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    "babel-polyfill",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
    publicPath: '/'  //在服务器中使用，以确保正确提供文件http://localhost:3000
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
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),  // 热更新
    // new webpack.NoEmitOnErrorsPlugin()
    ],


  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    hot: true,  // 热更新
    inline: true,//实时刷新
    //设置代理，代理到服务器
    // proxy:{
    //   target: 'http://localhost:3000',
    //   // host: 'app.58.com',
    //   changeOrigin: true,
    //   secure: false,
    // }
  }
}