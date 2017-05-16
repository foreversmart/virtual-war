module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    path: __dirname
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.ts?$/,
        use: "ts-loader"
      }
    ]
  },
  externals: {
    "phaser-ce": "window.Phaser"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: 'inline-source-map',
};
