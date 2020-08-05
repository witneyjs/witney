#!/usr/bin/env node

const { spawn } = require("./lib");

spawn("node", ["dist/main.js"]);
