// class Flock {
// 	constructor(n) {
// 		this.seagulls = n;
// 	}

// 	conjoin(others) {
// 		this.seagulls += others.seagulls;
// 		return this;
// 	}

// 	breed(others) {
// 		this.seagulls = this.seagulls * others.seagulls;
// 		return this;
// 	}
// }

// const flockA = new Flock(4);
// const flockB = new Flock(2);
// const flockC = new Flock(0);

// flockA
// flockB
// flockC

// const result = flockA
// 	.conjoin(flockC)
// 	.breed(flockB)
// 	// .conjoin(flockA.breed(flockB));
// //const temp= flockA.breed(flockB)
// result
// flockA

// const conjoin = (flockX, flockY) => flockX + flockY;
// const breed = (flockX, flockY) => flockX * flockY;

// const flockA = 4;
// const flockB = 2;
// const flockC = 0;

// const result = conjoin(
// 	breed(flockB, conjoin(flockA, flockC)),
// 	breed(flockA, flockB),
// );
// result;

// const add= (x,y)=> x+y
// const multiply = (x, y) => x * y;
// const flockA = 4;
// const flockB = 2;
// const flockC = 0;

// // const result = add(
// // 	multiply(flockB, add(flockA, flockC)),
// // 	multiply(flockA, flockB),
// // );
// const result= multiply(flockB,  add(flockA, flockA))
// result;

// a * (b+c)= a * b + a * c

// const match = curry((what, s) => s.match(what));
// const replace = curry((what, replacement, s) => s.replace(what, replacement));
// const filter = curry((f, xs) => xs.filter(f));
// const map = curry((f, xs) => xs.map(f));
// let str = 'My name is nashit shayan khan';

// let hasLetterA = match(/a/g);
// let ans = hasLetterA(str);
// ans;

// let noVowels = replace(/[aeiou]/gi);
// let censored = noVowels('*');
// let ans2 = censored(str)
// ans2

// //CHAPTER 4
// // curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
// function curry(fn) {
// 	const arity = fn.length;

// 	return function $curry(...args) {
// 		if (args.length < arity) {
// 			return $curry.bind(null, ...args);
// 		}

// 		return fn.call(null, ...args);
// 	};
// }

//ex 1
//Refactor to remove all arguments by partially applying the function.

//ques: let words= str=> split('',str)

// const split = curry((splitStr, originalStr) => originalStr.split(splitStr));
// const splitOn = split(' ');
// const words = splitOn('nashit is a frontend dev');
// words;

// words= split(' ')

//ex2
// const filterQs = xs => filter(x => match(/q/i, x), xs);

//ex3
// const keepHighest = (x, y) => (x >= y ? x : y);
//const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
//Refactor max to not reference any arguments using the helper function keepHighest

//ans

// useEffect(()=>{

// },[])
//componentDidMount

// useEffect(()=>{})
// //componentDidUpdate

// useEffect(()=>{},[values])
// //componentDidUpdate

// useEffect(()=>{

// 	return ()=> {//this will run when component unmounts}
// });

//componentWillUnmount

//parent

// function Parent(){

// 	function somethingHandler(){
// 		//do something
// 	}
// 	return (
// 		<Child handler={somethingHandler}/>
// 	)

// }

// function Child({handler}){

// 	return (
// 		<div onClick={handler}>
// 			{/* sothing */}
// 		</div>
// 	)
// }

// let arr = [{name: 'ram', age: 18}, {name: 'ganesh', age: 22}, {name: 'rakesh', age: 25}, {name: 'om', age: 46}, {name: 'sadik', age: 30},{name: 'asim', age: 32},{name: 'harsh', age: 15}]

// let a=1;
// a
