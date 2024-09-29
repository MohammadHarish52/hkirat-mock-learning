// enum is used to define constants

// explicity defining values

enum Direction {
  up = "up",
  left = "left",
  down = "down",
  right = "right",
}

function doSomething(keypress: Direction) {
  if (keypress === Direction.up) {
  }
}

doSomething(Direction.left);
doSomething(Direction.right);
doSomething(Direction.up);
console.log(Direction.down);
