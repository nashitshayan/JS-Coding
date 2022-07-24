//first class functions

// const greeting = (x) => (y) => `${x} ${y}!`;
// const howdy = greeting('Howdy');
// const hello = greeting('Hello');

// const g1 = howdy('Nashit');
// const g2 = hello('Nashit');

// g1;
// g2;

// declarative approach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const op = (x) => x * 2;

// numbers.forEach(op);
// numbers;

//pure functions

// same result for same input. No side effects.

//immutability

//cannot be mutated i.e changed

//let and var are mutable
// let a = 'something'
// a
// a= 'something else'
// a

//const is immutable
// const b= 'something'
// b
// b= 'something else' //error
// b

//but for objects and arrays the inner values can be mutated
// const obj1= {
// 	fName: 'Nashit'
// }
// obj1.lName= 'Khan'
// obj1

// //so use Object.freeze(obj) to make an obj immutable
// const obj2= Object.freeze({
// 	fName: 'Nashit'
// })
// obj2.lName= 'Khan' //will not do anything
// obj2

//dom manipulation using functions
