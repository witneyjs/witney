#!/usr/bin/env node

require("../lib/node/scripts").runConfiguredScripts({
  scriptType: "test",
  args: process.argv.slice(2).join(" ")
});
