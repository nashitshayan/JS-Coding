// const numbers = [1, 4, 9];
// //so this line below...
// const roots1 = numbers.map((num) => Math.sqrt(num));
// //... can be ??
// const roots2 = numbers.map(Math.sqrt);

// const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// console.log(arr.map(parseInt));

// DECOMPOSING COMPOSITION

// const revString = function revString(str) {
// 	const strArr = str.split('');
//     const revStrArr= strArr.reverse();
//     const joinedRevStrArr= revStrArr.join('')
//     return joinedRevStrArr
// };

// const revString = function revString(str) {
// 	return str.split('').reverse().join('');
// };

// let a= revString('React')
// a

/**
 * return join(reverse(split(string)))
 */

// const splitOn = (splitStr) => (original) => original.split(splitStr);
// const joinWith = (joinStr) => (original) => original.join(joinStr);
// const reverse = (arr) => [...arr].reverse();

// let splitByLetter = splitOn('');
// let ans1 = splitByLetter('nashit');
// ans1;
// let joinByLetter = joinWith('');
// let ans2 = joinByLetter(ans1);
// ans2;
// let ans3 = joinByLetter(reverse(splitByLetter('nashit')));
// ans3;

// const reverseString = (string) => {
// 	const instructions = [splitOn(''), reverse, joinWith('')];
// 	//let workingValue = string;

// 	// for(let i=0; i<instructions.length; i++)
// 	// {
// 	//     workingValue= instructions[i](workingValue)
// 	// }
// 	return instructions.reduce(
// 		(workingValue, instruction) => instruction(workingValue),
// 		string,
// 	);
// };
// let reversedStr = reverseString('nashit');
// reversedStr;

// const pipe =
// 	(...arrOfInstructions) =>
// 	(value) =>
// 		arrOfInstructions.reduce(
// 			(workingValue, instruction) => instruction(workingValue),
// 			value,
// 		);

// const pipe =
// 	(...fns) =>
// 	(x) =>
// 		fns.reduce((acc, fn) => fn(acc), x);

// let reverseString = pipe(splitOn(''), reverse, joinWith(''));

// let ans= reverseString('nashit')
// ans

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
// const R = (() => {
// 	return {
// 		curry: () => {},
// 		compose: () => {},
// 	};
// })();

// const elem = (tag) => document.createElement(tag);
// const text = (content) => document.createTextNode(content);

// const addClass = R.curry((className, element) => {
// 	element.classList.add(className);
// 	return element;
// });

// const append = R.curry((node, element) => {
// 	element.append(node);
// 	return element;
// });

// const message = (content) => {
// 	return R.compose(append(text(content)), addClass('class'))(elem('div'));
// };
