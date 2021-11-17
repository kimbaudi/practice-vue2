const { resolve } = require('path');
const sass = require('sass');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const port = 4444;

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    devMiddleware: {
      publicPath: '/',
    },
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: {
      target: [`http://localhost:${port}`],
    },
    port,
  },
});
