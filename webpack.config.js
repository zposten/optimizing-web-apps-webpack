const path = require('path')
const webpack = require('webpack')

module.exports = function (env, argv) {
  const environment = env || 'development'
  const isDev = environment === 'development'
  console.log(`This is a ${environment} build\n`)

  return {
    mode: environment,
    entry: './app/app.js',
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      filename: 'app.bundle.js',
      publicPath: '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.js$/, 
          exclude: /(node_modules|bower_components)/,
          use: {loader: 'babel-loader'},
        },
      ],
    },
    plugins: [
      isDev ? new webpack.HotModuleReplacementPlugin() : () => {}, 
    ],
    // Documented at: https://webpack.js.org/configuration/dev-server/
    devServer: {
      // The root that webpack-dev-server serves files from.  The default is 
      // the directory of this webpack config file.
      contentBase: path.resolve(__dirname, 'app'),
      // The webpack bundled files will be available to the browser under this
      // path (when served from memory by the webpack-dev-server).  This allows
      // the import in index.html to be the same for webpack and webpack-dev-server.
      publicPath: '/dist/',
      // Tell webpack-dev-server to watch files that are not built by webpack
      // but are inside of the content base.
      watchContentBase: true,
      hot: true,
      // Tell webpack-dev-server to only perform hot updates, and not to refresh
      // the page if a hot reload is not possible
      hotOnly: false,
      // Show an error overlay if an error has occurred during compilation
      overlay: true,
    }
  }
}