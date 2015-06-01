'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function(main) {
  var modulePaths = [
    'web_modules',
    'node_modules',
    path.resolve(__dirname, '../web_modules'),
    path.resolve(__dirname, '../node_modules')
  ];

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
      modulesDirectories: modulePaths,
      alias: {
        'react-pack-debug-root-component': main
      }
    },
    resolveLoader: {
      modulesDirectories: modulePaths
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel-loader'],
          exclude: [/node_modules/, /web_modules/]
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader',
          exclude: [/node_modules/, /web_modules/]
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
          exclude: [/node_modules/, /web_modules/]
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
