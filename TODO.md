TODO: readme: Add option for compilation without tests
TODO: complete empty tasks
TODO: https://webpack.js.org/guides/progressive-web-application/
TODO: Generate sub task (namespaces) execution in main task (example: test -> test-xxx-front, test-xxx-back)
TODO: webpack html and ssr / webpack build info
TODO: Default webpack dev server proxy for backend namespaces (https://github.com/chimurai/http-proxy-middleware)

TODO: babel-loader cache =D
// Process JS with Babel.
{
  test: /\.(js|jsx|mjs)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
  },
},


## Included
- Autostart Manager: node-autostart
- Package manager: yarn https://yarnpkg.com/lang/en/
- Continous integration: maybe https://github.com/node-ci/nci
- Scaffolding
  - https://github.com/hopplajs/hoppla
- CDN / HTML: Caddy (maybe)
  - https://github.com/mholt/caddy
- Reverse proxy: Traefik
  - https://github.com/containous/traefik
- Configuration management: Posixcube
  - https://github.com/myplaceonline/posixcube
- Data Validation:
  - https://github.com/ianstormtaylor/superstruct
- Frontend
  - Stylesheet toolkit: Postcss
    - https://github.com/postcss/postcss
  - CSS Framework
    - Materialize
      - https://materializecss.com/
    - UIKit
      - https://getuikit.com/
    - Bootstrap
      - https://getbootstrap.com
  - Grid: Grid KISS
    - https://github.com/sylvainpolletvillard/postcss-grid-kiss
  - Dynamic styles: polished
    - https://github.com/styled-components/polished
  - GUID creation: ?????
  - Fetch: cross-fetch (maybe)
    - https://github.com/lquixada/cross-fetch
  - Statemachines: xstate (implement in alo)
    - https://github.com/davidkpiano/xstate
- Backend
  - Type Checks: "kind-of"
  - Microservices: https://github.com/moleculerjs/moleculer
  - General: Node
    - https://nodejs.org/en/download/current/
    - Framework: express
      - http://expressjs.com/
    - Password hashing: bcrypt
      - https://github.com/kelektiv/node.bcrypt.js
    - Clustering: ClusterWS (maybe)
      - https://github.com/clusterws/clusterws
    - Websockets
      - Faye: https://faye.jcoglan.com/
      - NOT: uWS: https://github.com/unetworking/uwebsockets
  - Highspeed
    - pypy, virtualenv, pip
      - http://pypy.org/
      - https://virtualenv.pypa.io/en/stable/
      - http://doc.pypy.org/en/latest/install.html#installing-more-modules
    - golang
      - https://stackoverflow.com/questions/10772799/how-to-install-golang-3rd-party-projects-from-download-sources
      - https://golang.org/
- Database
  - Library: Knex, objection.js
    - https://github.com/tgriesser/knex
    - https://github.com/vincit/objection.js
  - General: PostgreSQL
    - https://www.postgresql.org/download/
    - http://sosedoff.github.io/pgweb/
  - In-memory: Loki (This is a Maybe)
    - https://github.com/techfort/LokiJS
  - Decentralized, Graphs: gun
    - https://github.com/amark/gun
- Object storage
  - https://github.com/minio/minio
- Firewall
  - UFW (only configuration)
    - https://wiki.ubuntu.com/UncomplicatedFirewall
  - Fail2ban
    - https://www.fail2ban.org/wiki/index.php/Main_Page
- Git service: Gogs
  - https://github.com/gogits/gogs

- File sync: https://syncthing.net/

## Development

### Enable mocha growl
(https://github.com/mochajs/mocha/issues/3088)
1. `sudo gem install terminal-notifier`
2. Add `--growl` to `package.json` `test-watch` script

### Dev domains
[xip](xip.io)


# Notes
- Alo
  - https://reactjs.org/docs/update.html#available-commands
  - https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
- Certificates using self signed or [Certbot](https://certbot.eff.org/#debianjessie-other)
    - `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./data/ssl/nginx.key -out ./data/ssl/nginx.crt`


## Rebuild C++
`npm rebuild --force`