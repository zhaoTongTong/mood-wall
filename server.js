const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackDevServer =  require('webpack-dev-server');
// const webpckHotMiddleware = require('webpack-hot-middleware')

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// webpackDevServer.addDevServerEntrypoints(config, options);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// app.use(require(webpckHotMiddleware)(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
