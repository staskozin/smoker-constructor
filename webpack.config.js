const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'constructor.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
