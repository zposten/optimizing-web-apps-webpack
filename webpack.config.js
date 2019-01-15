const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'app.bundle.js',
  },
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
  }
}