<img src="https://raw.github.com/witneyjs/witney/master/static/readme/logo.png" alt="logo"/>

-------

Witney is a template for javascript/typescript front- and backend projects with multiple entry points.


# [some-pkg](https://github.com/witneyjs/witney) &middot; <a href="https://opensource.org/licenses/MIT"><img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.0.svg?sanitize=true" alt="license"></a> <a href="https://www.npmjs.com/package/some-pkg"><img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.1.svg?sanitize=true" alt="npm"></a> <img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.2.svg?sanitize=true" alt="Tests"> <img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.3.svg?sanitize=true" alt="coverage"> <a href="https://prettier.io/"><img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.4.svg?sanitize=true" alt="code style"></a> <img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.5.svg?sanitize=true" alt="PRs"> 

Some project description

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