###hopplaconfig {
  fileName: 'start-<%= input.id %>.js',
  exclude: <%= JSON.stringify(!input.isNode) %>
} hopplaconfig###
#!/usr/bin/env node

require("./templates/start")({
  nameSpaceId: "<%= input.id %>"
});
