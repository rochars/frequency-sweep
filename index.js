/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/frequency-sweep
 *
 */

/** @private */
const WAVES = {
    "noise": function(t, delta, phase, start, end, phi0) {
        return Math.random() * (1 - (-1)) + (-1);
    },
    "sine": function(t, delta, phase, start, end, phi0) {
        phase = 2 *
            Math.PI * t * (start + (end - start) * delta / 2);
        return Math.sin(phase + phi0);
    },
    "triangle": function(t, delta, phase, start, end, phi0) {
        phase = 2 * Math.PI * t * (
            start + (end - start) * delta / 2);
        return (2 / Math.PI) * Math.asin(Math.sin(phase + phi0));
    },
    "sawtooth": function(t, delta, phase, start, end, phi0) {
        phase = 2 * Math.PI * t *
            (start + (end - start) * (delta / 2)) / 2;
        return (2 / Math.PI) * Math.atan(Math.tan(phase + phi0));
    },
    "square": function(t, delta, phase, start, end, phi0) {
        phase = 2 * Math.PI * t * (
            start + (end - start) * delta / 2);
        return Math.sign(Math.sin(phase + phi0));
    }
};

/**
 * Return the samples of a frequency sweep. The sweep may be divided
 * in segments, each using a different waveform (or noise), and each with
 * a start and end frequency.
 * @param {!Array<Object<!string, string|number>>} sequence The sequence.
 *      Each item in the array must have the properties:
 *          start: Integer value, the start frequency of the segment.
 *          end: Integer value, the end frequency of the segment.
 *          time: Float value, the duration of the segment. 1 = 1 second.
            wave: String, "sine", "square", "triangle", "sawtooth" or "noise".
 * @param {!number} sampleRate The sample rate.
 * @return {!Array<number>}
 */
function sweep(sequence, sampleRate) {
    var phi0 = 0;
    var phase = 0;
    var samples = [];
    var numSamples = 0;
    var duration = 0;
    var delta = 0;
    for (let i = 0; i < sequence.length; i++) {
        numSamples = Math.round(sampleRate * sequence[i]["time"]);
        duration = numSamples / sampleRate;
        for (let x = 0; x < numSamples; x++) {
            delta = x / numSamples;
            samples.push(
                WAVES[sequence[i]["wave"]](
                    duration * delta,
                    delta, phase,
                    sequence[i]["start"],
                    sequence[i]["end"],
                    phi0));
        }
        phase = 2 * Math.PI * duration *
            (sequence[i]["start"] + (sequence[i]["end"] - sequence[i]["start"]) / 2);
        phi0 = phi0 + phase;
    }
    return samples;
}

module.exports = sweep;