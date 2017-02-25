import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default [
  {
    entry: {
      bundle: src + '/index.jsx'
    },

    output: {
      path: dist,
      filename: '[name].js'
    },

    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:{
            presets: ['react', 'es2015', 'react-hmre']
          },
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader',
        }
      ],
      preLoaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', 'css']
    },
    devServer: { 
      contentBase: dist,
      inline: true,
      hot: true,
      port: 8080
    },
    eslint: {
      configFile: './.eslintrc.json'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: src + '/index.html',
        filename: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
]