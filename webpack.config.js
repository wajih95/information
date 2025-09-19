const path = require('path');

module.exports = {
  // Set the mode to 'production' for a minimized and optimized build.
  mode: 'production',

  // Set the target to 'node'
  target: 'node',

  entry: './myApp.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // Remove this section:
  // externals: [
  //   /^[a-z\-0-9]+$/
  // ]
};