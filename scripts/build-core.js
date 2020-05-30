#!/usr/bin/env node

const { spawn, args } = require("./lib");

spawn("npx", ["microbundle", "--raw", ...args]);
