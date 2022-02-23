module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/assets/scss/reset.scss";
                @import "@/assets/scss/scrollbar.scss";
              `
      }
    }
  }
}
