###hopplaconfig {
  fileName: 'svg-<%= input.nameSpaceId %>.js',
  exclude: <%= JSON.stringify(!!input.isNode) %>
} hopplaconfig###
#!/usr/bin/env node

const paths = require("common").paths;
const path = require("path");
const materialDir = paths.project("vendor/material-design-icons-3.0.1");
console.log(materialDir);

require("./templates/svg")({
  name: "cool",
  nameSpaceId: "<%= input.nameSpaceId %>",
  svgs: {
    unicorn: path.join(
      materialDir,
      "action",
      "svg",
      "production",
      "ic_work_48px.svg"
    ),
    unicorn2: path.join(
      materialDir,
      "editor",
      "svg",
      "production",
      "ic_insert_emoticon_48px.svg"
    )
  }
});
