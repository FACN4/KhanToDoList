var test = require("tape");
var logic = require("./logic");

test('Example test', function(t) {
  t.equal(1,1,"Tape should work");
  t.end();
});

test('Add new todo to the list ', function(t) {
  var todo = "Brush my hair"
  var todos = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];
var actual =  logic.addTodo(todos,todo).length;
var expected = 3;
  t.equal(actual,expected,"this fun should increase the size of the arr by 1 ");
  t.end();
});

test('delete a todo from the list ', function(t) {
  var id = 1;
  var todos = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];
var actual =  logic.deleteTodo(todos, id);
var expected = [{
  id: 0,
  description: 'smash avocados',
  done: true,
}];
  t.same(actual,expected,"this function  should decrease the size of the arr by 1 ");
  t.end();
});

test('Mark a todo from the list ', function(t) {
  var id = 0;
  var todos = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];
var actual =  logic.markTodo(todos, id);
var expected = todos = [
{
  id: 0,
  description: 'smash avocados',
  done: false,
},
{
  id: 1,
  description: 'make coffee',
  done: false,
},
];
  t.same(actual,expected,"this function  should return the same todolist with other value of :  done value ");
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
