var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './client/app/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  node: {
    net: 'empty',
    dns: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '\'production\'',
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client/app'),
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client/app'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
