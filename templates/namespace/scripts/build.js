###hopplaconfig {
  fileName: 'build-<%= input.id %>.js'
} hopplaconfig###
#!/usr/bin/env node

require("./templates/build")({
  nameSpaceId: "<%= input.id %>",
  useDevServer: <%= !input.isNode ? 'true': 'false' %>,
  useBundleAnalyzer: <%= !input.isNode ? 'true': 'false' %>
});
