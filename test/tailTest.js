const assert = require("chai").assert;
const tail = require("../tail");

let testArr = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 3 from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(testArr.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});