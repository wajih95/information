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
  // It tells webpack to not bundle node_modules but rather
  // to require them at runtime. This dramatically reduces
  // the size of your bundle.
  externals: [
    /^[a-z\-0-9]+$/ // Any module name that is a string of lowercase letters and numbers
  ]
};