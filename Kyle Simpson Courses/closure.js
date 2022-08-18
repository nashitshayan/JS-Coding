// CLOSURE
/**
 * The what-you-need-to-know definition:
 * Closure is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope.
 *
 */
// function foo() {
// 	var bar = 'bar';

// 	function baz() {
// 		console.log(bar);
// 	}
// 	bam(baz);
// }

// function bam(baz) {
// 	baz();
// }
// foo();

// for (var i = 1; i <= 5; i++) {
// 	setTimeout(() => {
// 		console.log('i: ' + i);
// 	}, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
// 	(function(i){
//         setTimeout(() => {
// 					console.log('i: ' + i);
// 				}, i * 1000);
//     })(i)
// }

// Closure: Classic Module Pattern
/**
 * It has two characteristics :
 * 1. There must be an outer wrapping function that gets executed.
 * 2. There must be one or more inner functions that get returned, which have a closure of the inner scope.
 *
 * It's the idea of Encapsulation, Hiding private implementation details : The Principle of Least Privilege/Exposure. Make everything private and only make public what is needed.
 */
// var foo = (function () {
// 	var o = { bar: 'bar' };
// 	return {
// 		bar: function () {
// 			console.log(o.bar);
// 		},
// 	};
// })();

// foo.bar();

// Closure: Modified Module Pattern
// One variation is to name the object and then return it.
// Advantages:
// 1. Stylistically better. Keep track of what's public and private.
// 2. Because of the object reference, it can be modified at runtime: add/remove methods, updated property values etc.

// var foo = (function () {
// 	var o = { bar: 'bar' };
// 	var publicAPI = {
// 		bar: function () {
// 			console.log(o.bar);
// 		},
// 	};
// 	return publicAPI;
// })();

// foo.bar();

// Closure: Modern Module Pattern
// Like the Require, the AMD pattern etc.
// Here we call ours 'Define'. It takes in a name of our module, and takes a function that returns back an object.
// But there is no execution of this function, that's the part the library does for us : executes it and assigns it that passed name.

// define("foo", function () {
// 	var o = { bar: 'bar' };
// 	return {
// 		bar: function () {
// 			console.log(o.bar);
// 		},
// 	};

// });

// foo.bar();

//Closure: ES6 Module Pattern
// First-class support for modules. Where we don't have to create the outer wrapping function. It's file based.

// var o = { bar: 'bar' };
// export function bar() {
// 	return o.bar;
// }
