const {
  createProxyMiddleware,
} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target:
        'http://ec2-43-202-148-202.ap-northeast-2.compute.amazonaws.com:8080',
      changeOrigin: true,
    })
  )
}
