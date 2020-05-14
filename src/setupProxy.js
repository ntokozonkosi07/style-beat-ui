 
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use('/style-beat', createProxyMiddleware({ target: "http://localhost:9999" }));
}