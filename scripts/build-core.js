#!/usr/bin/env node

const { spawn, args, buildArgs, rmDir, pkgDir, proxyTypes } = require("./lib");

(async () => {
  await rmDir(pkgDir("dist"), { recursive: true });
  spawn("npx", ["microbundle", ...buildArgs(), ...args]);
  await proxyTypes();
})();
