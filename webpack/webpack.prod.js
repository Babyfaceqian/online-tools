const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const AutoDllPlugin = require('autodll-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 200000,
  //     minChunks: 2,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     name: true
  //   }
  // },
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ]
  plugins: [
	new CleanWebpackPlugin(),// 默认清除 output 的 path 路径
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundles to index.html
      filename: '[name].js',
      entry: {
        vendor: [
          'react',
          'react-dom'
        ]
      }
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
      }
    })],
  },
});