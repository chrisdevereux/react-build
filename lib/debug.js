'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function(main) {
  return {
    devtool: 'cheap-module-source-map ',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'debug-host.jsx')
    ],
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        'react-pack-debug-root-component': main
      }
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loaders: ['react-hot', 'babel-loader']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      })
    ]
  };
};