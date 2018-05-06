/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/frequency-sweep
 *
 */

var assert = require("assert");

describe("interface", function() {
	
    const sweep = require("../test/loader.js");
    const sequence = [
    	{
    		"start": 1,
    		"end": 1,
    		"time": 1,
    		"wave": "sine",
    	},
    	{
    		"start": 1,
    		"end": 1,
    		"time": 1,
    		"wave": "sawtooth",
    	},
    	{
    		"start": 1,
    		"end": 1,
    		"time": 1,
    		"wave": "triangle",
    	},
    	{
    		"start": 1,
    		"end": 1,
    		"time": 1,
    		"wave": "square",
    	},
    	{
    		"start": 1,
    		"end": 1,
    		"time": 1,
    		"wave": "noise",
    	}
    ];

    it("Should have the sweep() function available", function() {
        assert.ok(sweep(sequence, 8000));
    });

});
