const path = require('path');

module.exports = {
  /*
  This is the initial file that Webpack parses through to make a
  dependency graph of all file assets to be bundled together,
  including your entire frontend React code, imported node modules,
  imported CSS and image files, etc.
  */
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  /*
  Set the mode to be production. This means that we are creating a minified
  and uglified production bundle, which compresses the codebase so that a
  client visiting our website can get the code delivered faster.
  */
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/build',
    proxy: { '/challenge': 'http://localhost:3000' },
  },
};
