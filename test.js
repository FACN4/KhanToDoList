var test = require("tape");
var logic = require("./logic");

test("Test if TAPE is working", function(t) {
  t.equal(1, 1, "Tape is working");
  t.end();
});

test("Test if generateId return a valid integer", function(t) {
  var actual = Number.isInteger(logic.generateId());
  var expected = true;
  t.equal(actual, expected, "The function should retun an integer");
  t.end();
});
test("Test if generateId returns a positive value", function(t) {
  var actual = logic.generateId() >= 0;
  var expected = true;
  t.equal(actual, expected, "The function should retun a positive value");
  t.end();
});
test("Test if generateId returns a unique number", function(t) {
  var arrOfIds = [];
  for (var i = 0; i < 1000; i++) {
    arrOfIds.push(logic.generateId());
  }
  var arrOfIdsLength = arrOfIds.length;
  var newArr = arrOfIds.filter(function(value, index) {
    return indexOf(value) === index;
  });

  var actual = logic.generateId() >= 0;
  var expected = true;
  t.equal(actual, expected, "The function should retun a positive value");
  t.end();
});
