#!/usr/bin/env node

require("../lib/node/scripts").runConfiguredScripts({
  scriptType: "build",
  args: process.argv.slice(2).join(" ")
});
