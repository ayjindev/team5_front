module.exports = {
  outputDir: 'static',
  assetsDir: 'assets',

  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/scss/scrollbar.scss";
        @import "@/assets/scss/reset.scss";
        `
      }
    }
  }
}
