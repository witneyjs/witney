<img src="<%= input.pkg.repoStaticUrl %>/static/readme/logo.png" alt="logo"/>

-------

Witney is a template for javascript/typescript front- and backend projects with multiple entry points.

<% if (input.pkg.homepage) { %>
# [<%= input.pkg.name %>](<%= input.pkg.homepage %>) &middot; <%- include('/tpl-lib/badges') -%>
<% } else { %>
# <%= input.pkg.name %> &middot; <%- include('/tpl-lib/badges') -%>
<% } %>

<%= input.pkg.description %>
