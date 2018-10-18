module.exports = {
  type: 'react-app',
  babel: {
    stage: 2
  },
  polyfill: true,
  webpack: {
    html: {
      title: 'Mr. Snailman: Blog'
    },
    publicPath: '/',
    extra: {
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /node_modules/
          }
        ]
      }
    }
  }
}
