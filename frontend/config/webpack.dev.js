const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');
const stylesRules = require('./config.utils');

module.exports = (env) => {
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      open: true
    },
    module: {
      rules: stylesRules(env)
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
      filename: '[name].bundle.[hash].js'
    }
  });
};
