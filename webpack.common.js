const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin=require('mini-css-extract-plugin');
const basePath=__dirname;

module.exports = {
    context: path.join(basePath,'src'),
    resolve:{extensions:[".js",".jsx",".ts",".tsx"]},
    entry: {
      App: './index.tsx',
      appStyles:['./css/index.scss'],
      vendorStyles:['../node_modules/bootstrap/scss/bootstrap.scss'],
        },
    output: {
        publicPath: '/',
        filename: '[name][chunkhash].js'
    },
    module: {
        rules: [
          {
            // Transpiles ES6-8 into ES5
            test: /\.jsx?$/,
            exclude: /node_modules/, 
            use: {
              loader: "babel-loader"
            }
          },
          {
            // Transpiles ES6-8 into ES5
            test: /\.tsx?$/,
            exclude: /node_modules/, 
            use: {
              loader: "babel-loader"
            }
          }
          ,
          {
            test: /\.html$/,
            use: [{loader: "html-loader"}]
          },
          {
            test: /\.css$/,
            use: [ MiniCSSExtractPlugin.loader,"css-loader"]
          },
          {
            test: /\.scss$/,
            use: [
              MiniCSSExtractPlugin.loader,
              "css-loader",
              {
               loader:"sass-loader",
               options: {
                 implementation:require("sass")
               } 
              }  
              ]
          },
          {
           test: /\.(png|svg|jpg|gif)$/,
           exclude:/node_modules/,
           loader: 'url-loader?limit=5000'
          }
        ]
},
plugins: [
    new HtmlWebPackPlugin({
      template: "../public/index.html",
      //filename: "index.html",
      inject: true
    }),
    new MiniCSSExtractPlugin({
        filename:"[name].css",
        chunkFilename:"[id].css"
      }),
  ]

}