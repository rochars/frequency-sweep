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

  const sequenceNoNoise = [
    {start: 1, end: 1, time: 1, wave: "sine"},
    {start: 1, end: 1, time: 1, wave: "sawtooth"},
    {start: 1, end: 1, time: 1, wave: "triangle"},
    {start: 1, end: 1, time: 1, wave: "square"}
  ];

  it("Should have the sweep() function available", function() {
    assert.ok(sweep(sequence, 8000));
  });

  it("array should be Array", function() {
    let outputTyped = sweep(sequence, 8000);
    assert.equal(outputTyped.constructor, Array);
  });

  it("typed array should be Float64Array", function() {
    let outputTyped = sweep(sequence, 8000, true);
    assert.equal(outputTyped.constructor, Float64Array);
  });

  it("typed array length should be the same as the array length", function() {
    let outputArray = sweep(sequence, 8000);
    let outputTyped = sweep(sequence, 8000, true);
    assert.deepEqual(outputTyped.length, outputArray.length);
  });

  it("typed array values should be the same as in the array", function() {
    let outputArray = sweep(sequenceNoNoise, 8000);
    let outputTyped = sweep(sequenceNoNoise, 8000, true);
    assert.deepEqual(outputTyped, new Float64Array(outputArray));
  });

});
