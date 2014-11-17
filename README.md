# broccoli-more-css

[![NPM version](https://badge.fury.io/js/broccoli-more-css.svg)](https://www.npmjs.org/package/broccoli-more-css)
[![Build Status](https://travis-ci.org/shinnn/broccoli-clean-css.svg?branch=master)](https://travis-ci.org/artificialio/broccoli-more-css)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-clean-css.svg?theme=shields.io)](https://david-dm.org/artificialio/broccoli-more-css)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-clean-css/dev-status.svg?theme=shields.io)](https://david-dm.org/artificialio/broccoli-more-css#info=devDependencies)

CSS minifier for [Broccoli](https://github.com/broccolijs/broccoli) with [more-css](https://github.com/army8735/more), which generally seems to lead to some of the best minification results: http://goalsmashers.github.io/css-minification-benchmark/

## Installation

Install with [npm](https://github.com/npm/npm#npm1----node-package-manager).

```
npm i --save-dev broccoli-more-css
```

## Usage

```javascript
var moreCss = require('broccoli-more-css');
tree = moreCss(tree, options);
```

```javascript
var moreCss = require('broccoli-more-css');
tree = moreCss(tree, { radical: false });
```

## API

### moreCss(tree, options)

#### options

##### radical

Type: `boolean`
Default: `true`

More file minimization.

## License

Copyright (c) 2014 [Markus Padourek](https://github.com/globegitter)

Licensed under [the MIT License](./LICENSE).
