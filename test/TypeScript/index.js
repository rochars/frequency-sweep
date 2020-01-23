"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/frequency-sweep
 */
var index_js_1 = require("../../index.js");
var sequence = [
    { start: 1, end: 1, time: 1, wave: "sine" },
    { start: 1, end: 1, time: 1, wave: "sawtooth" },
    { start: 1, end: 1, time: 1, wave: "triangle" },
    { start: 1, end: 1, time: 1, wave: "square" },
    { start: 1, end: 1, time: 1, wave: "noise" }
];
var samples = index_js_1.sweep(sequence, 44100);
var samplesTyped = index_js_1.sweep(sequence, 44100, true);
