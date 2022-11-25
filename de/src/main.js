const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const koaBody = require("koa-body");
const index = require("./router/index");
const upload = require("./router/upload");
const cors = require("@koa/cors");
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  koaBody.koaBody({
    multipart: true,
  })
);

router.use(upload.routes());
router.use(index.routes());
app.use(router.routes());
app.use(router.allowedMethods()); // 允许http请求的所有方法
app.listen(port, (ctx) => {
  console.log(`http://localhost:${port}`);
});
