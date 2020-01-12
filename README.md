<img width="400px" style="max-width: 100%;" src="https://raw.github.com/witneyjs/witney/master/static/readme/logo.png" alt="logo"/>

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

#### Initialize new project
```bash
hoppla -t witney -d newProj -i "{ install: true }";
cd newProj;
```

### Create a new namespace in the project
#### Frontend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'front' }"
```

##### Library
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'front', isLibrary: true }"
```

#### Backend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'back', isNode: true }"
```

#### Fullstack
```bash
npx hoppla -t templates/fullstack/ -f
```

##### Starting dev

```bash
# Tab 1:
./scripts/front/build.js -w -d
# Tab 2:
./scripts/back/build.js -w -d
# Tab 3:
./scripts/back/start.js -w
```

##### Building and starting prod
```bash
./scripts/build.js && ./scripts/back/start.js
```