/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/frequency-sweep
 *
 */

let sweep = require('../index.js');

if (process.argv[3] == '--dist') {
    require('browser-env')();let assert = require('assert');
    require('../dist/frequency-sweep-min.js');
    sweep = window.sweep;
}

module.exports = sweep;
