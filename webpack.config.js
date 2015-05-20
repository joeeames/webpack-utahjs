'use strict';  
var webpack = require('webpack');  
// PATHS
var PATHS = {  
  build: __dirname + '/app/built'
};
module.exports = {  
    entry: './app/index.js',
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style!css!sass'
        },
        {
          test: /\.js$/,
          loader: 'ng-annotate!babel!jshint',
          exclude: /node_modules/
        },
        {
          test: /\.html/,
          loader: 'raw'
        }
      ]
    }
};