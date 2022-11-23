# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ellie-aghajani/lotide`

**Require it:**

`const _ = require('@ellie-aghajani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: gets the first element of array
* `function2(tail)`: gets the last element of array
* `function3(middle)`: gets the middle element of array
* `function3(assertArraysEq)`: asserts if 2 arrays are equal
* `function3(assertEqual)`: asserts if two values are equal
* `function3(assertObjectsEqual)`: asserts if 2 objects are equal
* `function3(countLetters)`: counts each letter of string
* `function3(countOnly)`: takes elements of arrays and counts their amount
* `function3(eqArrays)`: compares 2 arrays
*  `function3(eqObjects)`: compares 2 objects
*  `function3(findKey)`: returns first element key that meets the condition of callback function
* `function3(findKeyByValue)`: returns element key that meets specified value
* `function3(letterPositions)`: returns all indices where specific is element found
* `function3(map)`: returns new array with results of callback function
* `function3(takeUntil)`: returns slice of an array with elements taken from the beginning
* `function3(without)`: removes element from an array