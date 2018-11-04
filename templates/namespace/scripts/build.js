###hopplaconfig {
  fileName: 'build-<%= input.nameSpaceId %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/build")({
  nameSpaceId: "<%= input.nameSpaceId %>",
  useDevServer: <%= input.isNode ? 'true': 'false' %>,
  useBundleAnalyzer: <%= input.isNode ? 'true': 'false' %>
});
