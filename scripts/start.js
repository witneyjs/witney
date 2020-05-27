#!/usr/bin/env node

const { spawn } = require("./lib");

spawn("npx", ["ts-node", "lib/main.ts"]);
