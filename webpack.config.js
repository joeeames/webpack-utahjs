'use strict';  
var webpack = require('webpack');  
//path = require('path');  
// PATHS
var PATHS = {  
  app: __dirname + '/app'
};
module.exports = {  
    entry: './app/index.js',
    output: {
      path: PATHS.app,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }
      ]
    }
};