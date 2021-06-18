const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");
const build = path.join(root, "release");
const mainFile = path.join(src, "index.ts");
const outFile = path.join(build, "drawjs.js");
const outMinFile = path.join(build, "drawjs.min.js");
module.exports = {
  mainFile,
  outFile,
  outMinFile,
};
