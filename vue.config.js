//vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: `
                @import "@/assets/css/reset.scss";
                @import "@/assets/css/scrollbar.scss";
              `
      }
    }
  }
}
