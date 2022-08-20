//Prototype
/**
 * - JavaScript and Lua are the only two languages right now where you can create an object without a class.
 * - Every single object is built by a constructor function (constructor call).
 * - Each time a constructor is called, a new object is created.
 * - It's often said that a constructor makes an object "based on" its own prototype. "Based on" implies something that isn't true about the JS language.
 * - "Based on" implies that we take a prototype and create a copy of it. That's how it happens in class-oriented languages like C++ and JAVA. When there's a parent class and you instantiate that parent class, there's a COPY of the behaviour from the parent class into the instance. Once the two have been seperated, there's no more relationship between the two. We have an instance that was a copy of a parent. That's not how it works in JS.
 * - A more appropriate way is to say : "A constructor makes an object *linked to* its own prototype. "
 */

// function Foo(who) {
// 	this.me = who;
// }

// Foo.prototype.identify = function () {
// 	return `I am ${this.me}`;
// };

// var a1 = new Foo('a1');
// var a2 = new Foo('a2');

// a2.speak = function () {
// 	console.log(`Hello, ${this.identify()} .`);
// };

// var r1 = a1.constructor === Foo;
// var r2 = a1.constructor === a2.constructor;
// var r3 = a1.__proto__ === Foo.prototype;
// var r4 = a1.__proto__ === a2.__proto__;
// r1;
// r2;
// r3;
// r4;

/**
 * What occurs when this code is interpreted by the JS engine (Objects: Obj and Funtions : Fn):
 * - Stuff that happened before even the first line of code
 *  - Fn called Object ---linked to--> Obj (doesn't have a name. But an arbitary label it has is : *Object.prototype*. So Object.prototype points to this Obj)
 *  - Now, on this Obj (Object.prototype), we have stuff like : toString(), valueOf() etc.
 * - line 11-> creates a Fn labeled 'Foo' -> also creates an Obj linked to Foo-> has the same arbitary name '.protoype' -> there is also a link [[Prototype]] from Foo.prototype to Object.prototype.
 *  - There's also an opposite connection, that Obj has a property on it called ".constructor" which points to the Fn Foo
 *  - However, this Obj wasn't constructed by that Fn The word constructor is literally just an arbitary word.
 * - line 15-> we add property to Obj which was linked to Fn Foo.
 * - line 19-> brand new Obj is created -> Obj gets linked to Foo.prototype -> The context gets set to 'this'; when we call Foo, this will point to this new Obj that is created -> If Foo doesn't already return anything, it will implicitly return the this -> This 'this' is then assigned to 'a1'. So this new Obj is now labelled "a1"
 *  - So on line 12-> the this.me means a property "me" is created on the "a1"
 * - line 20 works same as line 19
 * - line 22-> the speak property is added to the a2 Obj.
 * - line 26 and 27 -> Now, there is no "constructor" property on a1 or a2. When we look up and it doesn't exist -> It goes up the prototype chain and it will find the constructor property on Foo.prototype
 * - a1 and a2 are "linked" to Foo.prototype, by a prototype link. This link is called [[Prototype]], it is an internal link.
 * - line 28 -> __proto__ is pronounced as "dunder proto"-> there's no dunder proto on a1.prototype, now on Foo.prototype -> But there's a dunder proto on Object.prototype -> it's a getter Fn -> It returns the internal prototype linkage of whatever the this binding is.
 *  - So a1.__proto__ will return the internal prototype link [[Prototype]] of a1. So .__proto__ is a public property that references an internal characteristic.
 * - Both .constructor and .prototype are WRITABLE properties.
 * - We have the ability to delegate to a different object to handle a method call or property reference.
 */

// var r5 = a1.__proto__ === Object.getPrototypeOf(a1);
// var r6 = a1.constructor === Foo;
// var r7 = a1.__proto__ === a2.__proto__;
// var r8 = a2.__proto__ === a2.constructor.prototype;
// r5;
// r6;
// r7;
// r8;

// If you avoid shadowing (having same names in multiple levels), then things work fine. Otherwise you have to use crappy syntax (Fn.prototype.methodName.call(this))

//

// Prototype: Objects Linked

// function Foo(who) {
// 	this.me = who;
// }
// Foo.prototype.identify = function () {
// 	return `I am ${this.me}`;
// };
// function Bar(who) {
// 	Foo.call(this, who);
// }
// //Bar.prototype = new Foo() or
// Bar.prototype = Object.create(Foo.prototype);
// // Note: .constructor is not here, need to fix

// Bar.prototype.speak = function () {
// 	console.log(`Hello ${this.identify()} .`);
// };

// var b1 = new Bar('b1');
// var b2 = new Bar('b2');

// b1.speak();
// b2.speak();

//object.Create() basically does the first 2 steps of the 4 steps that happen when a function is called with new.

// Issues happen when we try to think of them as parent and child classes.
// b1.constructor would give Foo, which doesn't make sense.

//

//

//

//

/* Inheritance */

/**
 * OO: Classical Inheritance.
 * - Whenever there's a parent class gets instantiated or a child class derives from it, there is a COPY of the behaviour created. There is no linkage.
 * - Because the mechanism in JS doen't do copyying, it is wrong to use the term 'inheritance'.
 *
 * OO: "Prototypal" Inheritance : Note- wrong to use this term.
 * - In JS, the objects get LINKED to some Fn.prototype. There is an linkage behaviour , not a copy behaviour.
 * - This is a design pattern called "Behaviour Delegation", if some behaviour doesn't exist on an object, it will delegate it up the prototype chain and look in there.
 */

/**
 * Objects Linked to Other Objects (OLOO):
 *
 * -
 */
// function Foo(who) {
// 	this.me = who;
// }
// Foo.prototype.identify = function () {
// 	return `I am ${this.me}`;
// };
// function Bar(who) {
// 	Foo.call(this, who);
// }
// //Bar.prototype = new Foo() or
// Bar.prototype = Object.create(Foo.prototype);
// // Note: .constructor is not here, need to fix

// Bar.prototype.speak = function () {
// 	console.log(`Hello ${this.identify()} .`);
// };

// var b1 = Object.create(Bar.prototype);
// Bar.call(b1, 'b1');

// b1.speak();

//step 2
// function Foo(who) {
// 	this.me = who;
// }
// Foo.prototype.identify = function () {
// 	return `I am ${this.me}`;
// };
// var Bar = Object.create(Foo.prototype);
// Bar.init = function (who) {
// 	Foo.call(this, who);
// };

// Bar.speak = function () {
// 	console.log(`Hello ${this.identify()} .`);
// };

// // var b1 = new Bar('b1');
// var b1 = Object.create(Bar);
// b1.init('b1');
// b1.speak();

//step 3
// var Foo = {
// 	init: function (who) {
// 		this.me = who;
// 	},
// 	identify: function () {
// 		return `I am ${this.me}`;
// 	},
// };

// var Bar = Object.create(Foo);
// Bar.speak = function () {
// 	console.log(`Hello ${this.identify()} .`);
// };

// var b1 = Object.create(Bar);
// b1.init('b1');
// b1.speak();
