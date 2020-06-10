#!/usr/bin/env node

const { spawn } = require("./lib");

spawn("npx", ["ts-node", "-r", "tsconfig-paths/register", "lib/main.ts"]);
