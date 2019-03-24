const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports  = env => {
  return {
    mode: env === 'production' ? 'production' :'development',
    entry: './src/js/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    plugins: [
      new CopyPlugin([
        {
          from: './src/index.html',
          to: '',
          toType: 'dir',
        },
      ]),
    ]
  }
};