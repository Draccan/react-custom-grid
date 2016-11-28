var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/views/mainlayout/custom-grid.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
  	loaders: [
  		{
		    test: /\.jsx?$/,
		    loader: 'babel-loader',
		    exclude: /node_modules/,
		    query: {
		        presets: ['es2015']
		    }
		}
  	]
  }
};

module.exports = config;