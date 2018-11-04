###hopplaconfig {
  fileName: 'start-<%= input.nameSpaceId %>.js',
  exclude: <%= JSON.stringify(!input.isNode) %>
} hopplaconfig###
#!/usr/bin/env node

require("./templates/start")({
  nameSpaceId: "<%= input.nameSpaceId %>"
});
