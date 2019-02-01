const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_BASE_URL: process.env.NODE_ENV === 'production'
        ? JSON.stringify('https://heroku-postgres-test-magueule.herokuapp.com')
        : JSON.stringify('http://localhost:3000')
    })
  ]
}
