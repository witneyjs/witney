#!/usr/bin/env node

const shell = require("shelljs");

// https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b
shell.exec("git checkout master");
shell.exec("git subtree split --prefix static/docs -b gh-pages");
shell.exec("git push -f origin gh-pages:gh-pages");
shell.exec("git branch -D gh-pages");
