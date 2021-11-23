const path = require('path');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');

const settings = {
  devServer: {
    hot: true,
  },
  lintOnSave: false,
};

if (['build', 'public'].includes(process.env.npm_lifecycle_event)) {
  settings.publicPath = '';
} else if (process.env.npm_lifecycle_event === 'serve') {
  settings.publicPath = 'http://localhost:8080/';
  settings.configureWebpack = {
    plugins: [
      new HtmlWebpackHardDiskPlugin(),
    ],
  };
  settings.chainWebpack = (config) => {
    config
      .plugin('html')
      .tap((args) => ([{
        ...args[0],
        filename: path.resolve(__dirname, 'index.html'),
        alwaysWriteToDisk: true,
      }]));
  };
}

module.exports = settings;
