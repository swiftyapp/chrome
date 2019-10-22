const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    contentscript: './src/contentscript/index.js',
    background: './src/background/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/manifest.json', to: 'manifest.json' },
      { from: 'src/icons', to: 'icons' },
    ])
  ]
}
