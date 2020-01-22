/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/frequency-sweep
 */

import { sweep } from '../../index.js'

const sequence = [
  {start: 1, end: 1, time: 1, wave: "sine"},
  {start: 1, end: 1, time: 1, wave: "sawtooth"},
  {start: 1, end: 1, time: 1, wave: "triangle"},
  {start: 1, end: 1, time: 1, wave: "square"},
  {start: 1, end: 1, time: 1, wave: "noise"}
];


let samples = sweep(sequence, 44100)
