const {
  pkgDir,
  spawn,
  resolve,
  writeJson,
  readFile,
  writeFile,
} = require("../../scripts/lib");

const finalize = async function (hoppla) {
  const pkgPath = resolve(hoppla.destination, "package.json");
  const pkg = require(pkgPath);

  pkg.version = "0.0.1";
  pkg.description = "<REPLACE>";
  pkg.homepage = "<REPLACE>";
  pkg.repository.url = "https://github.com/<REPLACE>/<REPLACE>.git";
  pkg.name = pkg.amdName = hoppla.input.name;
  pkg.authors = [`${hoppla.input.authorName} <${hoppla.input.authorEmail}>`];
  await writeJson(pkgPath, pkg, {
    spaces: "  ",
  });

  const tsConfigPath = resolve(hoppla.destination, "tsconfig.json");
  const tsConfig = require(tsConfigPath);
  tsConfig.compilerOptions.paths[pkg.name] =
    tsConfig.compilerOptions.paths.witney;
  delete tsConfig.compilerOptions.paths.witney;
  await writeJson(tsConfigPath, tsConfig, {
    spaces: "  ",
  });

  let license = await readFile(pkgDir("LICENSE"), { encoding: "utf8" });
  license = license.replace(
    /^Copyright \(c\) .*$/m,
    `Copyright (c) ${new Date().getFullYear()} ${hoppla.input.authorName}`
  );
  await writeFile(resolve(hoppla.destination, "LICENSE"), license);

  if (hoppla.input.install) {
    spawn("npm", ["install"], {
      stdio: "inherit",
      cwd: hoppla.destination,
    });
  }

  console.log(
    'MANUAL ACTION: Replace "<REPLACE>" in package.json with proper values'
  );
  console.log("MANUAL ACTION: Customize CONTRIBUTING.md");
  console.log("MANUAL ACTION: Customize README.md");
};

module.exports = finalize;
