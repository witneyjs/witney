#!/usr/bin/env node

require("../lib/node/scripts").runConfiguredScripts({
  scriptType: "coverage",
  args: process.argv.slice(2).join(" ")
});
