const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.output.filename = 'bundle.min.js';
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      mangle: false,
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  )
}

module.exports = config
