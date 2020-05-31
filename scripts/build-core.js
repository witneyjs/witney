#!/usr/bin/env node

const { spawn, args, buildArgs } = require("./lib");

spawn("npx", ["microbundle", "--raw", ...buildArgs(), ...args]);
