# CHANGELOG

## v1.0.0
Add optional *outputTyped* param to *sweep()*. Default is false. When set to
true, samples are returned in a Float64Array. When false, samples are returned
in a Array.
```javascript
function sweep(sequence, sampleRate, outputTyped=true);
```
