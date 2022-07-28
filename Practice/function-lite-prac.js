//ex 1
// make a pure function bar to wrap around foo
// function foo(x){
//     y++;
//     z= x*y;
// }
// var y= 5,z;
// foo(20)
// z //120

//sol
// function bar(x, y) {
// 	var z;
// 	foo();
//     return [y,z]
// 	function foo() {
// 		y++;
// 		z = x * y;
// 	}

// }
// const r1= bar(20, 5); r1
// const r2= bar(20, 5); r2

//composition eg

// function sum(x, y) {
// 	return x + y;
// }
// function mult(x, y) {
// 	return x * y;
// }
// // 5+ (3*4)
// //impure way
// var z= mult(3,4)
// z= sum(z,5);

// z
// //using composition - 'manual' composition
// var res= sum(5,mult(3,4))
// res

// var a = Object.freeze([1, 2, 3]);
// a = 1;
// a;

// const b = Object.freeze([2, 3, 4]);
// b= 1;
// b

// function double(list) {
// 	let temp = [];
// 	for (let i = 0; i < list.length; i++) temp[i] = list[i] * 2;
// 	return temp;
// }
// let arr = [1, 2, 3];
// let res = double(arr);
// arr;
// res

//closure
// closure is when a function "remembers" the variables around it, even when that function is executed elsewhere

//eg
// function foo() {
// 	let count = 0;

// 	return function () {
// 		return count++;
// 	};
// }
// let x = foo();
// let r1 = x();
// let r2 = x();
// let r3 = x();
// r1;
// r2;
// r3;

//ex 2
// define foo() so that it produces a func which remembers only the first two arguments that were passed to foo() and adds them together

//sol
// function foo(first, second) {
// 	return function () {
// 		return first + second;
// 	};
// }
// let x = foo(3, 4);
// let r1 = x();
// let r2 = x();

// // expect r1===r2===7
// r1;
// r2;

//recursion

//eg
//non recursion
// function sumIter() {
// 	var sum = 0;
// 	for (var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }

// var res= sumIter(3,4,5)
// res //12

// recursion
// function sumRecurMine(args) {
// 	if (args.length === 1) return args[0];
// 	return args[0] + sumRecurMine([...args].splice(1));
// }
// let arr = [1, 2, 3, 4, 5];
// let res = sumRecurMine(arr);
// res; //15

// function sumRecurKyleOne() {
// 	var args = [].slice.call(arguments);
// 	args;
// 	if (args.length <= 2) return args[0] + args[1];
// 	return args[0] + sumRecurKyle.apply(null, args.slice(1));
// }
// let res2 = sumRecurKyle(1, 2, 3, 4, 5);
// res2;

// function sumRecurKyleTwo(...args) {
// 	args;
// 	if (args.length <= 2) return args[0] + args[1];
// 	return args[0] + sumRecurKyleTwo(...args.slice(1));
// }
// let res2 = sumRecurKyleTwo(1, 2, 3, 4, 5);
// res2;

//ex3
// turn mult() into a recursive func that can take as many arguments as necessary

// function mult(x,y,z){return x* y*z}
// let r1= mult(4,5,6)
// r1 //120
// let r2= mult(4,5,6,7)
// r2 //120

//sol
// function mult(...args){
//     if(args.length<=2)
//     return args[0] * args[1]
//     return args[0] * mult(...args.slice(1))
// }
// let r1= mult(4,5,6)
// r1 //120
// let r2= mult(4,5,6,7)
// r2 //840

// let a = [1, 1, 2, 3, 2, 5, 4, 4, 5, 6, 7, 7, 7, 7];

// let res = a.reduce((acc, val) => {
// 	if (!acc.includes(val)) acc.push(val);
// 	return acc;
// }, []);
// res;

//ex 4
// 1) Write two functions , each which return a different number value when called
function f1() {
	return 1;
}
function f2() {
	return 2;
}
let r1 = f1();
r1;
let r2 = f2();
r2;

// 2) Write an add() function that takes two numbers and adds them and returns the result.
//    Call add() with the results of your two functions from (1) and print the result to the console
function add(x, y) {
	return x + y;
}
let r3 = add(f1(), f2());
r3;

// 3) Write an add2() function that takes two functions instead of two numbers and it calls
//    those two functions and then sends those values to add() just like you did in (2)above

function add2(fn1, fn2) {
	return add(fn1(), fn2());
}
let r4 = add2(f1, f2);
r4;

// 4) Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned funciton will return the value when its called
function f3(val) {
	return function () {
		return val;
	};
}

// let three= f3(3);
// let t= three();
// t

// 5) Write an addn() that can take an arr of 2 or more functions and using only add2(), adds them together. Try it with a loop. Try it without a loop (recursion). Try it with build in array helper funcs helpers(map/reduce)

//using loop
function addN(...args) {
	let res = 0;
	for (let i = 0; i < args.length; i++) {
		res = add2(args[i], f3(res));
	}
	return res;
}
let one = f3(1);
let two = f3(2);
let three = f3(3);
let r5a = addN(one, two, three);
r5a;

//using recursion
function addNRecur(...args) {
	if (args.length <= 1) return args[0]();
	return add2(args[0], f3(addNRecur(...args.slice(1))));
}
let four = f3(4);
let five = f3(5);
let r5b = addNRecur(one, two, three, four, five);
r5b;

//using map/reduce
//takes array of values
function addNHelperOne(...args) {
	return args.reduce((acc, val) => {
		return add2(f3(acc), f3(val));
	});
}
//takes array of functions
function addNHelperTwo(...args) {
	return args.reduce((acc, val) => {
		return f3(add2(acc, val));
	})();
}
let r5c_1 = addNHelperOne(1, 2, 3, 4, 5);
let r5c_2 = addNHelperTwo(one, two, three, four, five);
r5c_1;
r5c_2;

// 6) Start with an array of odd and even numbers (with some duplicates), and trim it to only have unique values

let oddEven = [0, 1, 2, 3, 3, 4, 5, 5, 2, 3, 7, 8, 9, 12, 17];
let r6 = oddEven.reduce((acc, val) => {
	if (!acc.includes(val)) acc.push(val);
	return acc;
}, []);
r6;

// 7) Filter you array to only have even numbers in it
function onlyEven(n) {
	return n % 2 === 0;
}
let r7 = r6.filter(onlyEven);
r7;

// 8 Map your values to functions using (4) and pass the new list of functions to the addn from (5)
let r8 = addNHelperTwo(...r7.map(f3));
r8;

//9 Bonus test your functions - DONE ALREADY (manually lol)
