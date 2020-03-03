const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const packageConfig = require('./package.json');
const lessVars = require('./src/common/styles/variables');

const isDevelopment = process.env.NODE_ENV === 'development';

// Environment
const developmentMode = process.env.NODE_ENV === 'development';
const publicPath = '/';

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    VERSION: JSON.stringify(packageConfig.version),
  },
});

// Constant with our paths
const paths = {
  OUTPUT: path.resolve(__dirname, 'build'),
};

// HTML minify
const minify = developmentMode ? false : {
  removeAttributeQuotes: false,
  collapseWhitespace: true,
  html5: true,
  removeComments: true,
  removeEmptyAttributes: true,
};

// Set plugins
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './src/index.html',
  favicon: './src/common/assets/logo.png',
  hash: !developmentMode,
  minify,
});

const VENDOR_LIBS = [
  'react',
  'react-dom',
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: paths.OUTPUT,
    filename: '[name].js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(sa|s)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: isDevelopment,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              config: {
                path: path.resolve(__dirname, '.config'),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              includePaths: [path.resolve(__dirname, 'src/client/common/styles'), 'node_modules'],
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: lessVars,
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=./assets/img/[name]-[hash].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        exclude: [/node_modules/, /img/, /assets/],
        loader: 'url-loader?limit=1024&name=./fonts/[name]-[hash].[ext]',
      },
      {
        test: /\.(svg)$/,
        exclude: /fonts/,
        loader: 'file-loader',
        options: {
          name: './assets/img/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.(pdf|vtt)$/,
        loader: 'file-loader',
        options: {
          name: './assets/docs/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    // Enable importing JS files without specifying their's extension
    extensions: ['.js', '.jsx'],
    alias: {
      // JS alias
      '@Application': path.resolve(__dirname, './src/application/'),
      '@Common': path.resolve(__dirname, './src/common/'),
      '@Config': path.resolve(__dirname, './src/application/config/'),
      '@Scenes': path.resolve(__dirname, './src/scenes/'),
    },
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([
      { from: 'src/common/root', to: './' },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      url: false,
    }),
    processEnvPlugin,
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: developmentMode,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
        },
      }),
    ],
  },
  devServer: {
    // noInfo: true,
    // HTML5 router
    historyApiFallback: true,
    disableHostCheck: true,
    hot: false,
    // Auto refresh
    inline: false,
  },
  mode: process.env.NODE_ENV,
  devtool: developmentMode && 'source-map',
};
