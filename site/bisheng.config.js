const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

module.exports = {
  source: './site/posts',
  output: './site/_site',
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  port: 8000,
  webpackConfig(config) {
    config.resolve.alias = {
      'pretty-chart': path.join(process.cwd(), 'src'),
      'pretty-chart-colorsets': path.join(process.cwd(), 'src/ColorSets'),
    };

    config.babel.plugins.push([
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: true,
      },
    ]);

    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    return config;
  },
}