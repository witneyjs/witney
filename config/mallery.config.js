const paths = require('common').paths;
const pkg = require(paths.project('package.json'));

module.exports = {
    title: pkg.name,
    paths: {
      src: '../docs',
      output: '../site',
      public: '../docs/public'
    },
    colors: {
      accent: '#222'
    },
    toc: [
      { title: pkg.name, path: 'README.md' },
      { path: 'getting_started', children: [
        { path: 'installation.md' },
      ] },
      { title: 'Repository', href: pkg.repository.url }
    ]
  };