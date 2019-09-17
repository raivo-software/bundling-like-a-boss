const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const S3Plugin = require("webpack-s3-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              removeComments: true
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.ts', '.js']
  }
}