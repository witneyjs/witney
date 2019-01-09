<img src="https://raw.github.com/witneyjs/witney/master/static/readme/logo.png" alt="logo"/>

-------

Witney is a template for javascript/typescript front- and backend projects with multiple entry points.


# [some-pkg](https://github.com/witneyjs/witney) &middot; <a href="https://opensource.org/licenses/MIT"><img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.0.svg?sanitize=true" alt="license"></a> <a href="https://www.npmjs.com/package/some-pkg"><img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.1.svg?sanitize=true" alt="npm"></a> <img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.2.svg?sanitize=true" alt="Tests"> <img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.3.svg?sanitize=true" alt="coverage"> <a href="https://prettier.io/"><img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.4.svg?sanitize=true" alt="code style"></a> <img src="https://raw.github.com/witneyjs/witney/master/static/readme/gen-badges/badge.5.svg?sanitize=true" alt="PRs"> 

Some project description

-------

## Getting started with Witney

### Clone the witney repository

Witney is the raw project template. You can remove the original git origin and add changes to the template. Afterwards create new projects with `cp` or with `hoppla`.

```bash
git clone git@github.com:witneyjs/witney.git;
npm install -g hoppla;
```

### Start a new project from your local witney copy

#### Empty project
```bash
hoppla -t witney -d newProj;
cd newProj;
npm install;
```

#### Demo project
```
hoppla -t witney -d newProj -i "{ type: 'demo' }";
cd newProj;
```

### Create a new namespace in the project
#### Frontend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'front' }"
```

#### Backend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'back', isNode: true }"
```

#### Frontend & Backend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'front', backId: 'back' }"
npx hoppla -t templates/namespace/ -i "{ id: 'back', frontId: 'front', isNode: true }"
```