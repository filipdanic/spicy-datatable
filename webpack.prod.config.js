var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/spicy-datatable/SpicyDatatable.js'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'SpicyDatatable.js',
    libraryTarget: "umd",
    library: "SpicyDatatable",
    umdNamedDefine: true
  },
  externals: {
    "react": {
      "commonjs": "react",
      "commonjs2": "react",
      "amd": "react",
      // React dep should be available as window.React, not window.react
      "root": "React"
    },
    "react-dom": {
      "commonjs": "react-dom",
      "commonjs2": "react-dom",
      "amd": "react-dom",
      // React dep should be available as window.React, not window.react
      "root": "ReactDOM"
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, 'src')],
        exclude: path.resolve(__dirname, 'node_modules'),
      }
    ]
  }
};
