# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.11.0](https://github.com/witneyjs/witney/compare/v0.10.0...v0.11.0) (2020-08-28)

## [0.10.0](https://github.com/witneyjs/witney/compare/v0.9.0...v0.10.0) (2020-08-05)


### Features

* integrate type proxy creation into build script ([07e2cca](https://github.com/witneyjs/witney/commit/07e2ccacf56ea349ab1711ca290bb4dd52468091))


### Bug Fixes

* **buildArgs:** add pkg dependencies fallback object ([ccfbb91](https://github.com/witneyjs/witney/commit/ccfbb91534b885bcbf4d7c557219d552359ec27a))

## [0.9.0](https://github.com/witneyjs/witney/compare/v0.8.0...v0.9.0) (2020-07-25)


### Features

* add site folder to the tsconfig excludes ([bffad2d](https://github.com/witneyjs/witney/commit/bffad2dc079cf8cf906224aeeaeb2bcea2b4c837))
* **scripts:** add generation of proxy for core types ([aca0349](https://github.com/witneyjs/witney/commit/aca034912003d789fd262209859b71481c220385))

## [0.8.0](https://github.com/witneyjs/witney/compare/v0.7.0...v0.8.0) (2020-07-22)


### Features

* add dist exclude in tsconfig.json ([ac0a84a](https://github.com/witneyjs/witney/commit/ac0a84ae90062947196ae528c2ce031665ec3b8d))
* mark pkg dependencies as microbundle externals ([e9b2c7f](https://github.com/witneyjs/witney/commit/e9b2c7f20baf5af160c812a108b05f1bc06e6275))
* update tsconfig target to ESNext ([7719990](https://github.com/witneyjs/witney/commit/77199902f48e52265478a14fabc75fadd6839da7))

## [0.7.0](https://github.com/witneyjs/witney/compare/v0.6.0...v0.7.0) (2020-06-19)


### Features

* implement pkg exports ([50d0809](https://github.com/witneyjs/witney/commit/50d08091d823515da85ba18874ea8a2a4e7b2e2b))
* **module-script:** only add unique pkg array values ([a017d9f](https://github.com/witneyjs/witney/commit/a017d9f8653fbf383a3dd03c8a7dd70ec87a4def))

## [0.6.0](https://github.com/witneyjs/witney/compare/v0.5.0...v0.6.0) (2020-06-14)


### Features

* register tsconfig paths in start script ([9f137e6](https://github.com/witneyjs/witney/commit/9f137e6d632cc201e48f4714e8ab08038f6de9c6))

## [0.5.0](https://github.com/witneyjs/witney/compare/v0.4.0...v0.5.0) (2020-06-06)


### Features

* add modules to jest coverage paths ([14353f8](https://github.com/witneyjs/witney/commit/14353f81925fdc97aa5a063b24dfbd3a061acc8e))
* clean dist before build ([6306b95](https://github.com/witneyjs/witney/commit/6306b95b3b4c396ecbd773efd45f12c48fbd8aac))
* ignore empty totals in coverage pct ([7c5c202](https://github.com/witneyjs/witney/commit/7c5c202de1997dc086f7cb2135f2a6bc6aae10c3))
* ignore main files in coverage by default ([1d1e536](https://github.com/witneyjs/witney/commit/1d1e5369652315edad47fe0aa361b7e84a83adac))
* implement create-type-proxies script ([f99a363](https://github.com/witneyjs/witney/commit/f99a36340ece05021cb448abdb707888d7b67d98))
* implement modules and externals ([4ea1f94](https://github.com/witneyjs/witney/commit/4ea1f94ba134d7dd40ef79990d0287bf464481ee))
* implement ts module aliases ([cf0fad8](https://github.com/witneyjs/witney/commit/cf0fad8ccf9961052825b11f48648901ed244d82))
* pass coverage script without tests ([649498d](https://github.com/witneyjs/witney/commit/649498de1e6962adc58361efeae953bc8f57beb0))

## [0.4.0](https://github.com/witneyjs/witney/compare/v0.3.0...v0.4.0) (2020-05-30)


### Features

* set amdName when creating a new project ([9805dd0](https://github.com/witneyjs/witney/commit/9805dd039d43fb328a0bed9e8c261f5e4102c259))
* split up build script, add spawnScripts helper ([c01ec6f](https://github.com/witneyjs/witney/commit/c01ec6fd5bb24c19fa2ed0fca0fd85592899b3f4))


### Bug Fixes

* let prettier ignore CHANGELOG.md ([cfc2172](https://github.com/witneyjs/witney/commit/cfc21724f1d6d3b5c61dd0150940fc387be5458f))

## [0.3.0](https://github.com/witneyjs/witney/compare/v0.2.1...v0.3.0) (2020-05-27)


### ⚠ BREAKING CHANGES

* simplified the project using microbundle

### Features

* simplified the project using microbundle ([3350a96](https://github.com/witneyjs/witney/commit/3350a96fd8f7d23b7d16b4a7b0c52db867fad72e))

### [0.2.1](https://github.com/witneyjs/witney/compare/v0.2.0...v0.2.1) (2020-03-11)

## [0.2.0](https://github.com/witneyjs/witney/compare/v0.1.0...v0.2.0) (2020-03-06)

### ⚠ BREAKING CHANGES

- set babel node target at the correct config place (#54)

### Bug Fixes

- set babel node target at the correct config place ([#54](https://github.com/witneyjs/witney/issues/54)) ([6f46d9b](https://github.com/witneyjs/witney/commit/6f46d9bd3550d15cdf290fce39c7f54a8a8c83fa))

## 0.1.0 (2020-03-05)

### ⚠ BREAKING CHANGES

- upgrade dependencies

### Features

- added minimal CONTRIBUTING.md ([f4c004a](https://github.com/witneyjs/witney/commit/f4c004a71cc11f6530831de9995a407f6d32b7ac))
- implemented author name and mail replacements and automated package.json default values ([cad254a](https://github.com/witneyjs/witney/commit/cad254a2bc63bd0f68cc43b8217bd6f0218b89ce))
- integrated standard-version ([6c56a89](https://github.com/witneyjs/witney/commit/6c56a899ac6ddded6158b6bb924a2bf8c78da2b3))

* upgrade dependencies ([8b470cd](https://github.com/witneyjs/witney/commit/8b470cd6839a3b0ce77a64cb410369f2907857e5))
