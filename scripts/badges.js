#!/usr/bin/env node

const fs = require("fs");
const { assetsDir } = require("./lib");
const { badgen } = require("badgen");

const pkg = require("./../package");

fs.writeFileSync(
  assetsDir("badge.style.svg"),
  badgen({
    label: "code style",
    status: "prettier",
  })
);

fs.writeFileSync(
  assetsDir("badge.license.svg"),
  badgen({
    label: "license",
    status: pkg.license,
  })
);

fs.writeFileSync(
  assetsDir("badge.npm.svg"),
  badgen({
    label: "npm",
    status: pkg.version,
  })
);

const coverage = require("./../coverage/coverage-summary");
let pcts = [];
for (const [k, v] of Object.entries(coverage.total)) {
  pcts.push(v.pct);
}
const totalPct = pcts.length
  ? pcts.reduce((acc, pct) => acc + pct, 0) / pcts.length
  : 0;

fs.writeFileSync(
  assetsDir("badge.coverage.svg"),
  badgen({
    label: "coverage",
    status: Math.round(totalPct) + "%",
  })
);
