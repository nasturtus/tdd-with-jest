const kebabize = require("../src/kebabize");

test("hiThere should be kebabized to hi-there", function() {
  expect(kebabize("hiThere")).toEqual("hi-there");
});

test("hiThereBruceWayne shuld be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toEqual("hi-there-bruce-wayne");
});

test("camelsHave3Humps should be kebabized to camels-have-humps", function() {
  expect(kebabize("camelsHave3Humps")).toEqual("camels-have-humps");
});

// write additional tests to ensure kebabize() works as expected
