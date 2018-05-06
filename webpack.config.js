/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/frequency-sweep
 *
 */
const ClosureCompiler = require('google-closure-compiler-js').webpack;
module.exports = {
  entry: './compile.js',
  output: {
    filename: './dist/frequency-sweep-min.js'
  },
  plugins: [
    new ClosureCompiler({
      options: {
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE'
      }
    })
  ]
};