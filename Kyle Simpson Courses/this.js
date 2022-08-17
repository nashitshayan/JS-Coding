// Every function, while executing, has a reference to its current 'execution context' called **this**
// 'this' is js's version of dynamic scope

/**
 There are four rules for how the this keyword gets bound. They all depend on the 'call site', the placing code where a function gets executed, with ().
 */

//Rule 1 (4th in precedence) a.k.a. default binding rule : If you are in strict mode, default the this to the undefined value. Otherwise default it to the global object

//Rule 2 (3rd in precedence) a.k.a implicit binding rule: when there is an object property referece at the call site, then that object at the call site (or base object or the owing or containing object) becomes the this keyword

// function foo() {
// 	console.log(this.bar);
// 	// this.bar tells us that it needs to reference an object, not a primitive like a Number or a Boolean
// }

// var bar = 'bar1';
// var o2 = { bar: 'bar2', foo: foo };
// var o3 = { bar: 'bar3', foo: foo };

// foo(); //default binding
// o2.foo(); //implicit binding
// o3.foo(); // implicit binding

// //similar example

// var o1 = {
// 	bar: 'bar1',
// 	foo: function () {
// 		console.log(this.bar);
// 	},
// };

// var o2 = { bar: 'bar2', foo: o1.foo };

// var bar = 'bar3';
// var foo = o1.foo;

// o1.foo();
// o2.foo();
// foo();

// Lexical scope and this scope binding are two different mechanisms. Making a 'cross bridge' is impossible.

// function foo() {
// 	var bar = 'bar1';
// 	baz();
// }
// function baz() {
// 	console.log(this.bar);
// }

// var bar = 'bar2';
// foo();
//Here we attempted to somehow make the baz() refer to the local bar but it will not. Because the this depends on the call site and here it will follow the default binding rule and the this will assigned to either global object or undefined

//Rule 3 (2nd in precedence) a.k.a Explicit binding rule: If you use .call, .apply at the call site, it will use the object passed as its 'this'
//'Hard binding' : hard bind the this to a particular object so that no matter how the function is called, it will always be called with the this set to that object
// eg: ajax calls, async calls, callbacks, event listeners, etc

//this is done using 'bind' func
// function foo() {
// 	console.log(this.bar);
// }

// var bar = 'bar1';
// var obj = { bar: 'bar2' };

// foo();
// foo.call(obj);

//rule 4 (1st in precedence) a.k.a. The New Keyword: The this keyword can be bound to a brand new object that was created as a part of the constructor call hijacking.
// a) JS does not have classes
// b) The 'new' keyword has nothing to do with instantiating classes

/**
 When the "new" keyword is put in front of any function call, it turns that function call into a 'constructor' call. 
 It does 4 things:
 1. A brand new empty object is created.
 2*.This new object is linked to another object.  (will be explained later)
 3. The new object gets bound as the 'this' keyword for the purposes of that function call.
 4. If that function doesn't return anything, it will implicitly make the function return the 'this'.
 */

// function foo() {
// 	this.baz = 'baz';
// 	console.log(this.bar + ' ' + baz);
// }

// var bar = 'bar';
// var baz = new foo();
// baz

/**
 Four Questions to Ask about your THIS keyword:
 1. Was the function called with the new keyword? 
 2. Was it called with .call, .apply or explicityly bound with .bind? 
 3. Was the function called via a containing/owning object (context)? 
 4. Default: Global Object or Undefined in strict mode.
 */
