/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/frequency-sweep
 *
 */

let sweep;

// UMD
if (process.argv[3] == '--umd') {
  console.log('umd tests');
  sweep = require('../dist/frequency-sweep.js').sweep;

// Source
} else {
  console.log('Source tests');
  require = require("esm")(module);
  global.module = module;
  sweep = require('../index.js').sweep;
}

module.exports = sweep;
