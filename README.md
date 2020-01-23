# frequency-sweep
Copyright (c) Rafael da Silva Rocha.  
https://github.com/rochars/frequency-sweep

[![NPM version](https://img.shields.io/npm/v/frequency-sweep.svg?style=for-the-badge)](https://www.npmjs.com/package/frequency-sweep) [![Docs](https://img.shields.io/badge/API-docs-blue.svg?style=for-the-badge)](https://rochars.github.io/frequency-sweep/api) [![Use](https://img.shields.io/badge/use-online-blue.svg?style=for-the-badge)](https://rochars.github.io/frequency-sweep/index.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/frequency-sweep.svg?style=flat-square)](https://codecov.io/gh/rochars/frequency-sweep) [![Unix Build](https://img.shields.io/travis/rochars/frequency-sweep.svg?style=flat-square)](https://travis-ci.org/rochars/frequency-sweep) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/frequency-sweep.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/frequency-sweep) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/frequency-sweep.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/frequency-sweep/)

Sweep tone generator to create chirps with multiple stages.

## Install
```
npm install frequency-sweep
```

## Example
```javascript
const frequencySweep = require('frequency-sweep');

// Define a sweep sequence.
// This sequence have 2 steps, each using a different waveform.
const sequence = [
  {
    start: 1, // start in 1 Hz
    end: 100, // end in 100 Hz
    time: 1, // goes from 1 Hz to 100 Hz in 1 second
    wave: "sine" // use a sine wave
  },
  {
    start: 100, // start in 100 Hz
    end: 1400, // end in 1.4 kHz
    time: 5.2, // goes from 100 Hz to 1.4 kHz in 5.2 seconds
    wave: "sawtooth" // use a sawtooth wave
  }
];

// Get the samples of the 2-step sweep sequence in 44.1kHz.
// The samples are 64-bit, in the -1 to 1 range.
let samples = frequencySweep.sweep(sequence, 44100);
```

### Available waveforms:
- *'sine'*
- *'triangle'*
- *'square'*
- *'sawtooth'*

*'noise'* is also available.

## In the browser:
```html
<script src="https://unpkg.com/frequency-sweep"></script>
<script>
var samples = frequencySweep.sweep(sequence, 44100);
</script>
```

## API
```javascript
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
 * @return {!Array<number>}
 */
function sweep(sequence, sampleRate) {}
```

## LICENSE
Copyright (c) 2018 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
