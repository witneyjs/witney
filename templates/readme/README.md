<% if (input.pkg.homepage) { %>
# [<%= input.pkg.name %>](<%= input.pkg.homepage %>) &middot; <%- include('/tpl-lib/badges') -%>
<% } else { %>
# <%= input.pkg.name %> &middot; <%- include('/tpl-lib/badges') -%>
<% } %>

<%= input.pkg.description %>
