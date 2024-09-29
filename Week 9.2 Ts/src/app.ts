const user = {
  firstName: "Harish",
  lastName: "Mohammad",
  age: 22,
  occupation: "Developer",
};

// main difference between types and interfaces is that interfaces lets u
// implement classes while types lets u use union and intersections

interface User {
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
}
type User2 = {
  firstName: string;
  lastName: string;
  age: string | number;
  occupation: string;
};

function checkAdult(user: User) {
  if (user.age > 18) {
    return true;
  }
  return false;
}

console.log(checkAdult(user));
