const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (config, options) => {
    cssModules: true,
    config.module.rules.push({
      //      enforce: 'pre',
      //      test: /\.js?$/,
      //      exclude: [/node_modules/],
      //      loader: 'eslint-loader',
      //      options: {
      //        quiet: true,
      //      }
    });
    config.node = {
      fs: 'empty'
    }
    return config;
  },
});
