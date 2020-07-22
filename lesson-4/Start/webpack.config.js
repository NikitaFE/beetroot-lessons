const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =  (env = {mode: 'development'})  => {
  const isProduction = env.mode === 'production';
  const plugins = [
    new ExtractTextPlugin('style.css')
  ]

  return {
  mode: env.mode,
    entry: "./src/index.js",
    output: {
        path:   __dirname + "/dist",
        filename:"bundle.js"
      },
      module: {
        rules: [
          {  test: /\.js$/,   exclude: /node_modules/,    use: ['babel-loader'] },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          }
        ]
      },
      devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        overlay: true,
        stats: {
          modules: false
        }
      }
    }
}