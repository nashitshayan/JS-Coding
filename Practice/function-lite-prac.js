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
