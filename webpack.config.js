const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    index:'./src/index.js',
    historia:'./src/historia.js',
    libros_populares:'./src/libros_populares.js',
    nuevos_lanzamientos:'./src/nuevos_lanzamientos.js',
    pag1:'./src/pags1.js',
    pag2:'./src/pags2.js',
    pag3:'./src/pags3.js'
},
  output: {
    path: path.resolve(__dirname, 'dist_webpack_babel'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/estilos.bundle.css'
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      template:'./src/historia.html',
      filename:'historia.html',
      chunks:['historia']
    }),
    new HtmlWebpackPlugin({
      template:'./src/nuevos_lanzamientos.html',
      filename:'nuevos_lanzamientos.html',
      chunks:['nuevos_lanzamientos']
    }),
    new HtmlWebpackPlugin({
      template:'./src/libros_populares.html',
      filename:'libros_populares.html',
      chunks:['libros_populares']
    }),
    new HtmlWebpackPlugin({
      template:'./src/pags1.html',
      filename:'pags1.html',
      chunks:['pags1']
    }),
    new HtmlWebpackPlugin({
      template:'./src/pags2.html',
      filename:'pags2.html',
      chunks:['pags2']
    }),
    new HtmlWebpackPlugin({
      template:'./src/pags3.html',
      filename:'pags3.html',
      chunks:['pags3']
    })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        
        }
      }
      
      
    ],
  },
};


