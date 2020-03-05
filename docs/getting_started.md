# Getting started

## Clone the witney repository

Witney is the raw project template. You can remove the original git origin and add changes to the template. Afterwards create new projects with `cp` or with `hoppla`.

```bash
git clone git@github.com:witneyjs/witney.git;
npm install -g hoppla;
```

## Start a new project from your local witney copy

### Initialize new project
```bash
hoppla -t witney -d newProj -i "{ install: true }";
cd newProj;
```

## Create a new namespace in the project
### Frontend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'front' }"
```

#### Library
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'front', isLibrary: true }"
```

### Backend
```bash
npx hoppla -t templates/namespace/ -i "{ id: 'back', isNode: true }"
```

### Fullstack
```bash
npx hoppla -t templates/fullstack/
```

#### Starting dev

```bash
# Tab 1:
./scripts/front/build.js -w -d
# Tab 2:
./scripts/back/build.js -w -d
# Tab 3:
./scripts/back/start.js -w
```

#### Building and starting prod
```bash
./scripts/build.js && ./scripts/back/start.js
```