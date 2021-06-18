const { createProxyMiddleware } = require('http-proxy-middleware')
let proxyNode = "http://localhost:3032";
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: proxyNode,
    secure: false,
    changeOrigin: true,
  }))
}