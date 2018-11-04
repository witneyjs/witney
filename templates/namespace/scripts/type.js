###hopplaconfig {
  fileName: 'type-<%= input.nameSpaceId %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/type")({
  nameSpaceId: "<%= input.nameSpaceId %>"
});
