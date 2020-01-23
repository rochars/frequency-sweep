/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview Function to create multi-stage frequency sweeps.
 * @see https://github.com/rochars/frequency-sweep
 */

/**
 * Waveform functions.
 * @private
 */
const WAVES = {
  noise: function() {
    return Math.random() * (1 - (-1)) + (-1);
  },
  sine: function(t, delta, phase, start, end, phi0) {
    phase = 2 * Math.PI * t * (start + (end - start) * delta / 2);
    return Math.sin(phase + phi0);
  },
  triangle: function(t, delta, phase, start, end, phi0) {
    phase = 2 * Math.PI * t * (start + (end - start) * delta / 2);
    return (2 / Math.PI) * Math.asin(Math.sin(phase + phi0));
  },
  sawtooth: function(t, delta, phase, start, end, phi0) {
    phase = 2 * Math.PI * t * (start + (end - start) * (delta / 2)) / 2;
    return (2 / Math.PI) * Math.atan(Math.tan(phase + phi0));
  },
  square: function(t, delta, phase, start, end, phi0) {
    phase = 2 * Math.PI * t * (start + (end - start) * delta / 2);
    return Math.sign(Math.sin(phase + phi0));
  }
};

/**
 * Return the samples of a frequency sweep. The sweep may be divided
 * in segments, each using a different waveform (or noise), and each with
 * a start and end frequency.
 * @param {!Array<Object<string, string|number>>} sequence The sequence.
 *   Each item in the array must have the properties:
 *     start: Integer value, the start frequency of the segment.
 *     end: Integer value, the end frequency of the segment.
 *     time: Float value, the duration of the segment. 1 = 1 second.
 *     wave: String, "sine", "square", "triangle", "sawtooth" or "noise".
 * @param {number} sampleRate The sample rate.
 * @param {?boolean=} outputTyped True to return Float64Array, false for Array.
 * @return {!Array<number>|!Float64Array}
 */
export function sweep(sequence, sampleRate, outputTyped=false) {
  /** @type {number} */
  let phi0 = 0;
  /** @type {number} */
  let phase = 0;
  /** @type {number} */
  let numSamples = 0;
  /** @type {number} */
  let duration = 0;
  /** @type {number} */
  let delta = 0;
  /** @type {!Array|!Float64Array} */
  let samples = [];
  if (outputTyped) {
    samples = new Float64Array(getOutputArraySize_(sequence, sampleRate));
  }
  /** @type {number} */
  let x = 0;
  for (let i = 0; i < sequence.length; i++) {
    numSamples = Math.round(sampleRate * sequence[i].time);
    duration = numSamples / sampleRate;
    /** @type {number} */
    let limit = numSamples + x;
    for (; x < limit; x++) {
      delta = x / numSamples;
      samples[x] = WAVES[sequence[i].wave](
        duration*delta, delta, phase, sequence[i].start, sequence[i].end, phi0);
    }
    phase = 2 * Math.PI * duration *
        (sequence[i].start + (sequence[i].end - sequence[i].start) / 2);
    phi0 = phi0 + phase;
  }
  return samples;
}

/**
 * Return the size of the output array.
 * @param {!Array<Object<string, string|number>>} sequence The sequence.
 * @param {number} sampleRate The sample rate.
 * @return {number}
 * @private
 */
function getOutputArraySize_(sequence, sampleRate) {
  /** @type {number} */
  let numSamples = 0;
  for (let i = 0; i < sequence.length; i++) {
    numSamples += Math.round(sampleRate * sequence[i].time);
  }
  return numSamples;
}