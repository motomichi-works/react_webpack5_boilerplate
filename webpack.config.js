// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'production';

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: 'development',
  entry: {
    'pages/index': './src/entry-points/index.tsx',
  },
  // 出力するパスは絶対パスで書きます
  output: {
    path: `${__dirname}/public/javascripts`,
    filename: (arg) => {
      return '[name].bundle.js';
    },
  },
  module: {
    rules: [
      // 拡張子 .ts もしくは .tsx の場合
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      // 拡張子 .scss の場合
      {
        test: /\.scss/,
        use: [
          // linkタグに出力する機能
          {
            loader: 'style-loader',
          },
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // import時に省略できる拡張子を設定
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],
};
