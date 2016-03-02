var path              = require('path')
var webpack           = require('webpack')
var autoprefixer      = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'zooid-ui.js',
    libraryTarget: 'umd',
    library: 'ZooidUI'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),

    new ExtractTextPlugin("[name].css"),

    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurenceOrderPlugin(),

    // This plugin minifies all the Javascript code of the final bundle
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   sourceMap: false,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //   },
    // }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|example)/
      },
    ]
  },
  postcss: function () {
    return [autoprefixer]
  }
}
