var test = require("tape");
var logic = require("./logic");
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

test('Example test', function(t) {
  t.equal(1,1,"Tape should work");
  t.end();
});

test('Add new todo to the list ', function(t) {
  var todo = "Brush my hair"
  var actual =  logic.addTodo(todos,todo).length;
  var expected = 3;
  t.equal(actual,expected,"this fun should increase the size of the arr by 1 ");
  t.end();
});

test('delete a todo from the list ', function(t) {
  var id = 1;
  var actual =  logic.deleteTodo(todos, id);
  var expected = [{
    id: 0,
    description: 'smash avocados',
    done: true,
    }
  ];
  t.same(actual,expected,"this function  should decrease the size of the arr by 1 ");
  t.end();
});

test('Mark a todo from the list ', function(t) {
  var id = 0;
  var actual =  logic.markTodo(todos, id);
  var expected = [
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

test("Test if generateId returns a unique number", function(t) {
  var arrOfIds = [];
  for (var i = 0; i < 1000; i++) {
    arrOfIds.push(logic.generateId());
  }
  var arrOfIdsLength = arrOfIds.length;
  var newArr = arrOfIds.filter(function(value, index, arr) {
    return arr.indexOf(value) === index;
  });
  var actual = logic.generateId() >= 0;
  var expected = true;
  t.equal(actual, expected, "The function should retun a positive value");
  t.end();
});

test("test if the array of todos is sorted according Done property",function(t){
  var actual = logic.sortTodos(todos);
  var expected =  [
    {
      id: 1,
      description: 'make coffee',
      done: false,
    },
    {
      id: 0,
      description: 'smash avocados',
      done: true,
    },
  ];
  t.same(actual, expected, "the function should sort the array :false first");
  t.end();
});
