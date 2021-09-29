module.exports = {
  mode: 'development',
  entry: {
    'pages/index': './src/entry-points/index.tsx',
  },
  // 出力するパスは絶対パスで書きます
  output: {
    path: `${__dirname}/public/javascripts`,
    filename: (arg) => {
      return '[name].bundle.js'
    },
  },
  module: {
    rules: [
      // 拡張子 .ts もしくは .tsx の場合
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    // import時に省略できる拡張子を設定
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
