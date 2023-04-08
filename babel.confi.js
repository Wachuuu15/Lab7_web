module.exports = function (api) {
    api.cache(true);
  
    const presets = [];
    const plugins = ["@babel/plugin-transform-arrow-functions"];
  
    if (process.env["ENV"] === "prod") {
      plugins.push();
    }
  
    return {
      presets,
      plugins
    };
  }