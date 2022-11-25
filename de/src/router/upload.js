const Router = require("koa-router");
const router = new Router();
const path = require("path");
const fse = require("fs-extra");
router.post("/upload", async (ctx, next) => {
  const { filepath: filePath, originalFilename: fileName } =
    ctx.request.files.file;
  const dest = path.join(__dirname, "../../upload", fileName);
  await fse.move(filePath, dest);
  ctx.body = {
    state: 200,
  };
});

module.exports = router;
