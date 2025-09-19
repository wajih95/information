const path = require('path');

module.exports = {
  entry: './myApp.js',  // The entry point of your application
  output: {
    filename: 'bundle.js',  // The bundled output file
    path: path.resolve(__dirname, 'dist'),  // Where to save the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // You may want to use Babel to transpile your code
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
