'use strict';

var path = require('path');
var webpack = require('webpack');

var localModules = path.resolve(__dirname, '../node_modules');

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
      fallback: [localModules],
      alias: {
        'react-pack-debug-root-component': main
      }
    },
    resolveLoader: {
      fallback: [localModules]
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loaders: ['react-hot', 'babel-loader']
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        },
        '__react_build': {
          moduleName: JSON.stringify(path.basename(main, path.extname(main)))
        }
      })
    ]
  };
};
