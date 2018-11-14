###hopplaconfig {
  fileName: 'coverage-<%= input.id %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/coverage")({
  nameSpaceId: "<%= input.id %>"
});
