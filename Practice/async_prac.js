// one way to solve race conditions problems with async operations is to use callbacks.
// the callback nesting results in
// 1. dirty code
// 2. hard to reason, brains are wired for synchronous tasks, and this callback thing is hard to wrap the head around
// 3. hard to handle errors

// Promise : Object that represents eventual completion (or failure) of an async operation and its resulting value
// Makes async code readable
// Promise can have three states :
// 1. Pending: Initial state, eg: when the api call is happening, promise is in pending
// 2. Fulfilled: When async call gets completed successfuly. Fulfilled promise returns a single value.
// 3. Rejected: When async call fails. It returns the 'reason' why it was rejected i.e. the error

// Settled or Resolved : Means promise is either in fulfilled or rejected state

// Note: Promises in JS are NOT lazy. They are evaluated 'eagerly'.

// When a promise is 'fulfilled', it will call the 'then' function

function promise() {
	return new Promise((resolve, reject) => {
		resolve('promise resolved!');
	});
}

let p1 = promise();
p1;

let temp = new Promise((resolve, reject) => {});
temp;

//TODO : Read Promises chapter from YDKJY
