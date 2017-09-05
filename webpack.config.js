'use strict';

const webpack = require('webpack');
const path = require('path');


const BUILD_DIR = path.resolve(__dirname, 'app/public');
const APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};

