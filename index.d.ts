// Type definitions for frequency-sweep 1.0
// Project: https://github.com/rochars/bitdepth
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/frequency-sweep

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
 * @return {!Array<number>|Float64Array}
 */
export function sweep(
    sequence: Array<object>,
    sampleRate: number,
    outputTyped?: boolean): Array<number>|ArrayLike<any>;
