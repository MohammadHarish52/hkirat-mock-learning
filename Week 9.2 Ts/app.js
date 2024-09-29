"use strict";
//basic types
// number. string , null ,undefined , boolean
function print(firstName) {
    console.log(`hello ${firstName}`);
}
print("Harish");
//2
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 5));
//3
function adult(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(adult(56));
//4
function two(fn) {
    setTimeout(() => {
        fn();
    }, 1000);
}
function delayFn() {
    console.log("hello ts");
}
two(delayFn);
