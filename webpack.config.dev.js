var path         = require('path')
var webpack      = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './example'
  ],
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=100000&minetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&minetype=image/png"
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer
    ]
  }
}
