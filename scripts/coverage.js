#!/usr/bin/env node

const { spawnScript, args } = require("./lib");

spawnScript("test", ["--coverage", ...args]);
