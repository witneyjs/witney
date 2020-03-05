const path = require("path");
const writeJsonFile = require("../node/writeJsonFile");
const { execSync } = require("child_process");
const shell = require("shelljs");

const finalize = function(hoppla) {
  const pkgPath = path.join(hoppla.destination, "package.json");
  const pkg = require(pkgPath);

  pkg.version = "0.0.1";
  pkg.description = "<REPLACE>";
  pkg.homepage = "<REPLACE>";
  pkg.common.repoStaticUrl =
    "https://raw.github.com/<REPLACE>/<REPLACE>/${branch}/";
  pkg.repository.url = "https://github.com/<REPLACE>/<REPLACE>.git";
  pkg.name = hoppla.input.name;
  pkg.authors = [`${hoppla.input.authorName} <${hoppla.input.authorEmail}>`];
  pkg.common.bannerCopyright = `Copyright(c) ${new Date().getFullYear()}-present ${
    hoppla.input.authorName
  }`;

  writeJsonFile(pkgPath, pkg);

  shell.sed(
    "-i",
    /^Copyright \(c\) .*$/,
    pkg.common.bannerCopyright,
    path.join(hoppla.destination, "LICENSE")
  );

  if (hoppla.input.install) {
    execSync("npm install", {
      stdio: "inherit",
      cwd: hoppla.destination
    });
  }

  console.log(
    'MANUAL ACTION: Replace "<REPLACE>" in package.json with proper values'
  );
  console.log("MANUAL ACTION: Customize CONTRIBUTING.md");
  console.log("MANUAL ACTION: Customize .gitignore");
  console.log("MANUAL ACTION: Customize templates/readme/README.md.hop.ejs");
};

module.exports = finalize;
