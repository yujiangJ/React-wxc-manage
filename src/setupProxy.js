/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-17 10:48:55
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-23 09:38:04
 */
const { createProxyMiddleware } = require('http-proxy-middleware')
let proxyNode = "http://localhost:3032";
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: proxyNode,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    },
  }))
}