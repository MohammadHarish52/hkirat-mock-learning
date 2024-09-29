// enum is used to define constants

enum Direction {
  up,
  left,
  down,
  right,
}

function doSomething(keypress: Direction) {
  if (keypress === Direction.up) {
  }
}

doSomething(Direction.left);
doSomething(Direction.right);
doSomething(Direction.up);
