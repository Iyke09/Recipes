var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/app/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
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
      loader: 'raw-loader',
      include: path.join(__dirname, 'client/app'),
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client/app'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
