module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-env"];
    const plugins = ["@babel/plugin-transform-arrow-functions","@babel/plugin-proposal-throw-expressions","@babel/plugin-transform-runtimes"];
    return {
      presets,
      plugins
    };

    //Con esto, Babel usará automáticamente los polyfills necesarios según la configuración especificada en tu archivo de configuración.



}