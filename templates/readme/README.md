<img src="<%= input.repoStaticUrl %>static/readme/logo.png" alt="logo"/>

-------

Witney is a template for javascript/typescript front- and backend projects with multiple entry points.

<% if (input.pkg.homepage) { %>
# [<%= input.pkg.name %>](<%= input.pkg.homepage %>) &middot; <%- include('/tpl-lib/badges') -%>
<% } else { %>
# <%= input.pkg.name %> &middot; <%- include('/tpl-lib/badges') -%>
<% } %>

<%= input.pkg.description %>

-------

## Getting started with Witney

### Create a frontend namespace

Run: `npx hoppla -t templates/namespace/ -i "{ id: 'front' }"`

### Create a backend namespace

Run: `npx hoppla -t templates/namespace/ -i "{ id: 'back', isNode: true }"`

### Clone Witney for a new project

Run: `npm install -g hoppla && hoppla -t witney -d newProj && cd newProj && npm install`

#### Clone and setup demo

Run: `npm install -g hoppla && hoppla -t witney -d newProj -i "{ type: 'demo' }" && cd newProj`