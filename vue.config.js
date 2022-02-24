const { VUE_APP_SERVER } = process.env

module.exports = {
  // 개발 서버 설정
  devServer: {
    // 프로시 설정
    proxy: {
      // 프록시 요청을 보낼 api
      '/serverApi': {
        // 프록시 요청을 보낼 서버 주소
        target: VUE_APP_SERVER, // .env 파일 참고
        changeOrigin: true,
        pathRewrite: {
          '^/serverApi': ''
        }
      }
    }
  },
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
