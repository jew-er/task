module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/palette.scss";
          @import "@/scss/typography.scss";
        `
      }
    }
  }
};
