###hopplaconfig {
  fileName: 'test-<%= input.nameSpaceId %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/test")({
  nameSpaceId: "<%= input.nameSpaceId %>"
});
