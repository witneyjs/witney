const common = require("../../lib/node");
const paths = common.paths;
const svgstore = require("svgstore");
const fs = require("fs");
const shell = require("shelljs");
const yargs = require("yargs");

const joinSvg = function(files) {
  var sprites = svgstore({
    cleanSymbols: ["fill"]
  });

  Object.keys(files).forEach(function(svgName) {
    var filePath = files[svgName];
    var svgContent = fs.readFileSync(filePath, "utf8");
    sprites.add(svgName, svgContent);
  });

  return sprites.toString({ inline: true });
};

const svg = ({ svgs, nameSpaceId, minify = true, name }) => {
  if (!name) {
    name = nameSpaceId;
  }

  const argv = yargs.options({
    m: { alias: "minify", type: "boolean", default: true },
    "no-minify": { type: "boolean" }
  }).argv;

  const destFile = paths.lib(`${nameSpaceId}/assets/${name}.svg`);

  fs.writeFileSync(destFile, joinSvg(svgs));

  if (argv.minify) {
    const command = `npx svgo ${destFile} --disable=removeUselessDefs --disable=cleanupIDs`;
    shell.exec(command, { silent: true });
  }

  shell.cp(destFile, `${destFile}.txt`);
};

module.exports = svg;
