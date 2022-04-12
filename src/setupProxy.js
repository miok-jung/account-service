const { createProxyMiddleware } = require("http-proxy-middleware"); // createProxyMiddleware를 http-proxy-middleware 라이브러리에서 불러오기
// TODO 좀 더 간단한(혹은 다양한) proxy해결법 알아보기

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
