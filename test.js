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
// test("Test if generateId returns a unique number", function(t) {
//   var arrOfIds = [];
//   for (var i = 0; i < 1000; i++) {
//     arrOfIds.push(logic.generateId());
//   }
//   var arrOfIdsLength = arrOfIds.length;
//   var newArr = arrOfIds.filter(function(value, index) {
//     return indexOf(value) === index;
//   });
//
//   var actual = logic.generateId() >= 0;
//   var expected = true;
//   t.equal(actual, expected, "The function should retun a positive value");
//   t.end();
// });

//Yoosef tests

test("Testing array of objects copy is equal to the original- cloneArrayOfObjects", function(t) {
  var todosTest = [{breakfast: 'porridge', lunch: 'pizza', dinner: 'paella'}];
  var actual = logic.cloneArrayOfObjects(todosTest);
  var expected = todosTest;
  t.same(actual, expected, "The return value should be equivalent to the input");
  t.end();
});


test("Test cloneArrayOfObjects makes a clone of the array of objects", function(t) {
var todosTest = [{breakfast: 'porridge', lunch: 'pizza', dinner: 'paella'}];
  var actual = logic.cloneArrayOfObjects(todosTest);
  actual[0]["breakfast"] = "toast";
  var expected = todosTest;
  t.notSame(actual, expected, "The function should retun a clone, not a pointer");
  t.end();
});

test("Test add to do function ", function(t) {
var todo = [{breakfast: 'porridge'}];
var newTodo = {lunch:'uyg'};
 var expected = [{breakfast: 'porridge'},{lunch:'uyg'}]
  var actual = logic.addTodo(todo,newTodo);
  t.same(actual, expected, "The function should retun a clone, not a pointer");
  t.end();
});
