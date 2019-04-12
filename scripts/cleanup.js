#!/usr/bin/env node

const { paths } = require("../lib/node");
const shell = require("shelljs");

// Cleanup tmp
shell.rm("-rf", paths.tmp("*"));
shell.rm("-rf", paths.tmp(".*"));

// Write a new empty .gitkeep in tmp
shell.echo("-n", "").to(paths.tmp(".gitkeep"));

// Cleanup dev-tools (babel/nyc/...) caches
shell.rm("-rf", paths.project("node_modules/.cache/*"));
shell.rm("-rf", paths.project("node_modules/.cache/.*"));
