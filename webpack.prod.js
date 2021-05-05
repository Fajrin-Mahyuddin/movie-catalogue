// eslint-disable-next-line import/no-extraneous-dependencies
import { merge } from 'webpack-merge';
// eslint-disable-next-line import/extensions
import common from './webpack.common.js';

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
});
