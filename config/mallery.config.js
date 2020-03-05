const paths = require("../lib/node").paths;
const pkg = require(paths.project("package.json"));

module.exports = {
  title: pkg.name,
  paths: {
    src: "../docs",
    output: "../static/docs",
    public: "../docs/public"
  },
  toc: [
    { title: pkg.name, path: "README.md" },
    { path: "getting_started.md" },
    { title: "Changelog", path: "CHANGELOG.md" },
    { title: "Repository", href: pkg.repository.url }
  ]
};
