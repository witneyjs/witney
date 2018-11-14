###hopplaconfig {
  fileName: 'test-<%= input.id %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/test")({
  nameSpaceId: "<%= input.id %>"
});
