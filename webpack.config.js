const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true
  },
  output: {
    filename: './bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {
        test: path.resolve(__dirname, 'node_modules/mqtt/'),
        use: 'shebang-loader'
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder,
  plugins: [
    // new CopyWebpackPlugin([{from: 'src/lib/data/config.json', to: 'dest/lib/data/config.json', context: './'}], {
    //   debug: 'debug'
    // })
  ]
};
