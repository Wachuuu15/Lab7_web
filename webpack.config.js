const path = require('path');

module.exports = {
  entry: {
    index:'./index.js',
    historia:'./historia.js',
    libros_populares:'./libros_populares.js',
    nuevos_lanzamientos:'./nuevos_lanzamientos.js',
    pag1:'./pags1.js',
    pag2:'./pags2.js',
    pag3:'./pags3.js'
},
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};


