//Callbacks

/**
 * Our brains work synchronously. We want to express things which are async in nature in a synchronous way in JS. Because that makes it easier to reason about.
 *
 * - There is Inversion of Control that takes place when using Callbacks. We hand over our function to something else and ask it to call it at some later time. There is a lot of trust which is handed over.
 */

//Genrators
/**
 * - Allows to pause execution of a function
 */

function* gen() {
	console.log('Hi');
	console.log('I am a ');
	yield null;
	console.log('generator');
}
var it = gen();
it.next();
// it.next();
