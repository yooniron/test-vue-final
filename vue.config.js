module.exports = {

  devServer: {
    host: 'localhost'
  },

  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-with-vuejs/'
    : '/',
  outputDir: 'docs'
}