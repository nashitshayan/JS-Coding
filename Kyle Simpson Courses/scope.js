// var foo = 'bar';

// function bar() {
// 	var foo = 'baz'; // a new local variable, different from the one in the upper scope.
// }
// bar();

// function baz(foo) {
// 	foo = 'bam'; // Because foo came in as a param, it is treated as a  local variable, it is assigned 'bam' and then later discarded. If we remove the foo param, then this statement will update the foo in the upper scope.
// 	bam = 'yay'; //Normally, works fine, JS will go ahead and create this 'bam' variable
// 	// When using 'use strict' or ES6 modules, throws an error because bam is never
// }
// baz('poo'); // if no arg is passed, the inner foo will be initially 'undefined' and then it will get assigned 'bam'.
//if an argument is passed, the iner foo will be assigned that value and then later 'bam'

// var aaa = 'aaa';
// var bing = function () {
// 	console.log('outer bing');
// 	var bing = function () {
// 		console.log('inner bing');
// 	};
// 	bing();
// 	var aaa = 'abababa';
// };

// bing();

// function a() {
// 	var b = 3;
// 	function aa() {
// 		aaa = 1; //gets declared in the global scope
// 	}
// 	aa();
// }
// a();

//case 1 : Both function declarations with same name
//op:
// second bong
// second bong
//Reason: IDK yet. But my guess is that during the compiling/memory allocation phase, second definition overrides the first one. Therefore during execution, both 'bong()' will run the updated function body (second bong)
// Update: Now I know. Multiple duplicate function declarations get overwritten.
// function bong() {
// 	console.log('first bong');
// }
// bong();
// function bong() {
// 	console.log('second bong');
// }
// bong();

//case 2 : First is declaration and second is expression
//op:
// first bong
// second bong
//Reason : IDK yet. But what is observable is that before the second call of 'bong()' is reached, the bong LHS reference still holds/points-to the function declaration version and hence first call goes to that declaration. However on the second bong() call, the bong LHS reference points to the anonymous function expression version and therefore the call goes to the expression. I kept the function expressions anonymous so that the change can be noticed in the dev tools under the list of global objects

// function bong() {
// 	console.log('first bong');
// }
// bong();
// var bong = function () {
// 	console.log('second bong');
// };
// bong();

// case 3
// op:
// first bong
// first bong
// Reason: IDK yet. But it appears to me that the expression takes precedence or overrides the declaration. So when the parsing/compiling is done, bong LHS reference points to the expression body.
// var bong = function () {
// 	console.log('first bong');
// };
// bong();
// function bong() {
// 	console.log('second bong');
// }
// bong();

// case 4
// op:
// frist bong
// second bong
// Reason: IDK yet. But it appears that just like in case 2, the bong LHS reference points to the first expression and then later to the second one.

// var bong = function bong() {
// 	console.log('first bong');
// };
// bong();
// var bong = function bong() {
// 	console.log('second bong');
// };
// bong();

//TODO:
//post on discord
// Was playing around with scope and observed some funny behaviour. I've written what I *think* is the reason, but I may be wrong.
// Feel free to play around with it and run each case. If anyone knows the real reason why each case happens, do share.

// https://codepen.io/nashitshayan/pen/qBoxwgj?editors=0011

//Scope and Execution example

// var foo = 'bar';
// function bar() {
// 	var foo = 'baz';
// 	function baz(foo) {
// 		foo = 'bam';
// 		bam = 'yay';
// 	}
// 	baz();
// }
// bar();

// foo //bar
// bam // yay
// baz() // reference error

// function declarations, function expressions, block scope

// var foo = function bar() {
// 	var foo = 'baz';
// 	function baz() {
// 		foo = bar;
// 		foo; //function
// 	}

// 	baz();
// };
// foo();
//bar() //error

//Cheat lexical scope using Eval()
//NOTE: NEVER use eval()

// var foo = 'bar';
// function baz(str) {
// 	eval(str); //cheating!
// 	//foo //42 OOPS!
// }
// baz('var foo=42');

//Cheat lexical scope using With keyword
// var obj = {
// 	a: 2,
// 	b: 3,
// 	c: 4,
// };
// obj.a = obj.b + obj.c;
// obj.c = obj.b - obj.a;
// with (obj) {
// 	a = b + c;
// 	d = b - a;
// 	d = 3; //?
// }

// obj;
// obj.d; // undefined
// d; // 3-- oops

// comparing arrays - hack
// let a1 = [
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// ];
// let a2 = [
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// ];

// let r = a1 === a2;
// r;

// let sA1 = JSON.stringify(a1);
// let sA2 = JSON.stringify(a2);
// let t = sA1;
// t;
// let sR = sA1 === sA2;
// sR;

//block scope -let

function foo() {
	var bar = 'bar';
	for (let i = 0; i < bar.length; i++) {
		var ch = bar.charAt(i);
		ch;
	}
	//  i // error
}
foo();

function boo(bar) {
	if (bar) {
		let baz = bar;
		if (baz) {
			let bam = baz;
		}
		//bam // error
	}
	// baz // error
}
boo('bar');

//explicit let block
function poo(bar) {
	// let (baz=bar) {
	//     baz // fine
	// }
}

//hoisting
//var a = b(); // undefined
//var c = d(); // ref err
//a // undefined
//c // nothing

// function b() {
// 	return c;
// }
// var d = function () {
// 	return b();
// };

//functions get hoisted before variables

//meat
// foo(); //"foo"

// var foo = 2;
// foo;

// function foo() {
// 	console.log('bar');
// }
// function foo() {
// 	console.log('foo');
// }

//nice mutual recursion problem
// let r = a(1);
// r;
// function a(foo) {
// 	if (foo > 20) return foo;
// 	return b(foo + 2);
// }
// function b(foo) {
// 	return c(foo) + 1;
// }
// function c(foo) {
// 	return a(foo * 2);
// }
