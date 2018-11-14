###hopplaconfig {
  fileName: 'type-<%= input.id %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/type")({
  nameSpaceId: "<%= input.id %>"
});
