const { spawnSync } = require("child_process");
const path = require("path");
const { promisify } = require("util");
const fs = require("fs-extra");

exports.extname = path.extname;
exports.basename = path.basename;
exports.readDir = promisify(fs.readdir);
exports.writeFile = promisify(fs.writeFile);
exports.readFile = promisify(fs.readFile);
exports.writeJson = fs.writeJson;
exports.rmDir = promisify(fs.rmdir);
exports.copy = fs.copy;
exports.pkgDir = (...suffix) => path.resolve(__dirname, "..", ...suffix);
exports.scriptsDir = (...suffix) => exports.pkgDir("scripts", ...suffix);
exports.assetsDir = (...suffix) => exports.pkgDir("assets", ...suffix);
exports.args = process.argv.slice(2);
exports.spawn = (
  command,
  args,
  options = { stdio: "inherit", encoding: "utf8" }
) => {
  return spawnSync(command, args, options);
};
exports.spawnScript = (script, args = [], options) => {
  return exports.spawn(
    "node",
    [exports.scriptsDir(`${script}.js`), ...args],
    options
  );
};
exports.spawnScripts = async (prefix, args = [], options) => {
  const files = await exports.readDir(this.scriptsDir());
  for (const file of files) {
    if (!file.startsWith(prefix + "-")) {
      continue;
    }

    const fileExtension = exports.extname(file);
    const script = exports.basename(file, fileExtension);
    exports.spawnScript(script, args, options);
  }
};
