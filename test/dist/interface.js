/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/frequency-sweep
 *
 */

var assert = require("assert");
const sweep = require("../loader.js");

describe("Interface tests", function() {
    
  const sequence = [
    {start: 1, end: 1, time: 1, wave: "sine"},
    {start: 1, end: 1, time: 1, wave: "sawtooth"},
    {start: 1, end: 1, time: 1, wave: "triangle"},
    {start: 1, end: 1, time: 1, wave: "square"},
    {start: 1, end: 1, time: 1, wave: "noise"}
  ];

  it("Should have the sweep() function available", function() {
    console.log(sweep(sequence, 8000));
    assert.ok(sweep(sequence, 8000));
  });

});
