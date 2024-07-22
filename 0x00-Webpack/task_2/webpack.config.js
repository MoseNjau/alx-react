const path = require('path');

const config = {
  mode: "production",
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "css-loader",
          "style-loader"
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassingOnDebug: true,
              disable: true,
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;