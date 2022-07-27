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
