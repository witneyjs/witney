###hopplaconfig {
  fileName: 'coverage-<%= input.nameSpaceId %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/coverage")({
  nameSpaceId: "<%= input.nameSpaceId %>"
});
