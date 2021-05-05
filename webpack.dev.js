const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // inline: false,
    contentBase: path.resolve(__dirname, './dist'),
  },
});
