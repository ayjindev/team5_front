//vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "@/assets/css/reset.scss";,
                @import "@/assets/css/scrollbar.scss";
              `
      }
    }
  }
}
