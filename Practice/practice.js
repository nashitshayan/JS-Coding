// const proto = {
//     hello(){
//         return `Oui, my name is ${this.name}`;
//     }
// }

// //const greeter =(name)=> Object.assign(Object.create(proto), {name});

// //const nashit = greeter('nashit');

// const newNash = Object.assign({}, proto, {name: 'Nashit'});
// console.dir(newNash.hello())

//module revealing pattern

// const myModule= (()=>{
//     'use strict'

//     let _privy = 'Hi there';
//     let publy= 'public ting';

//     let _priMethod = ()=>{
//         console.log(_privy);
//     }
//     let publyMethod = ()=>{
//         _priMethod();
//     }

//     return {publyMethod, publy};

// })();

// myModule.publyMethod();
// console.log(myModule.publy)

// const aModule = (()=>{
//     const log= ()=> console.log('a module\'s log');
//     return {log}
// })();

// console.log(aModule)
// aModule.log();

//class es6

// class Man {
//     constructor(name){
//         this.name=name;
//     }

//     manHood(){
//         console.log(`ABOUT TIME YOU BECAME A MAN ${this.name.toUpperCase()}!`);
//     }
// }

// const boy= new Man('Nashit');

// boy.manHood();

// const Man= (name)=> {
//     this.name= name;
// }

// function Man(name) {
//     this.name = name;
//     function soo(){
//         console.log('ssooo')
//     }
//   }
// // Man.prototype.manHood = function() {
// //     console.log('hi')
// // };

// Man.prototype.sayHi = function() {
//     console.log(this.name);
//   };

//   const boy= new Man('Nashit');

// //boy.sayHi();

// for(let i in Man)
//     console.dir(i)

/* 

Three differences between class syntax and constructor syntax:

1) A function that's created using class will have an internal property called [[isClassConstructor]]: true. The languages checks for this property in various places. For eg: A class function must always be called with 'new' keyword.

2) Class methods are non-enumerable i.e the enumerable  flag is set to false for all methods in the 'prototype'.

3) Classes always 'use strict'.


*/

// const myObj= {
//   func: function(){
//     console.log(this);
//   }
// }

// myObj.func();

// let  abc= ()=>{
//   console.log('abx')
// }
// console.log( abc);

// let testBuffer = new ArrayBuffer(16);
// let arr1= new Int16Array(testBuffer);
// console.dir(arr1);

// function dropdown(){
//     let menuBtn= document.getElementById('menuBtn');

//     menuBtn.addEventListener('click', handleMenuClick)
// }

// const handleMenuClick= ()=> {
//     let nav= document.getElementById('nav');
//     nav.classList.toggle('nav-dropdown');
// }
// dropdown();

// function get(url){
//     //return a new promise
//     return new Promise(function(resolve,reject){
//         //do xhr stuff
//         let req= new XMLHttpRequest();
//         req.open('GET', url, true);

//         req.onload= function(){
//             //this us called even on 404 etc
//             //so check the status
//             if(req.status==200){
//                 //resolve the promise with the status text
//                 //which will hopefully be a meaningful error
//                 resolve(req.response);
//             }
//             else{
//                 //otherwise reject with the status text
//                 //which will hopefully be a meaningfull error
//                 reject(Error(req.statusText));
//             }
//         };

//         //handle network errors
//         req.onerror= function(){
//             reject(Error('Network Error'));
//         }

//         //make the request
//         req.send();
//     });
// }

// //use it
// get('story.json').then(function(response){
//     console.log('Success', response);
// }, function(error){
//     console.log('Failed', error)
// });

// let p = new Promise(function(resolve,reject){

//     //do something async

//     if(/* all good */){
//         resolve('sucess');
//     }
//     else{
//         reject('failure')
//     }
// });

// p.then(function(result){
//     /*do something with the result*/
// }).catch(function(){
//     //error
// }).finally(function(){
//     //run regardless of error or sucess
// })

// const numbers = [1, 4, 9];
// //so this line below...
// const roots1 = numbers.map((num) => Math.sqrt(num));
// //... can be ??
// const roots2 = numbers.map(Math.sqrt);

// const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// console.log(arr.map(parseInt));

// DECOMPOSING COMPOSITION

// const revString = function revString(str) {
// 	const strArr = str.split('');
//     const revStrArr= strArr.reverse();
//     const joinedRevStrArr= revStrArr.join('')
//     return joinedRevStrArr
// };

// const revString = function revString(str) {
// 	return str.split('').reverse().join('');
// };

// let a= revString('React')
// a

/**
 * return join(reverse(split(string)))
 */

const splitOn = (splitStr) => (original) => original.split(splitStr);
const joinWith = (joinStr) => (original) => original.join(joinStr);
const reverse = (arr) => [...arr].reverse();

// let splitByLetter = splitOn('');
// let ans1 = splitByLetter('nashit');
// ans1;
// let joinByLetter = joinWith('');
// let ans2 = joinByLetter(ans1);
// ans2;
// let ans3 = joinByLetter(reverse(splitByLetter('nashit')));
// ans3;

// const reverseString = (string) => {
// 	const instructions = [splitOn(''), reverse, joinWith('')];
// 	//let workingValue = string;

// 	// for(let i=0; i<instructions.length; i++)
// 	// {
// 	//     workingValue= instructions[i](workingValue)
// 	// }
// 	return instructions.reduce(
// 		(workingValue, instruction) => instruction(workingValue),
// 		string,
// 	);
// };
// let reversedStr = reverseString('nashit');
// reversedStr;

// const pipe =
// 	(...arrOfInstructions) =>
// 	(value) =>
// 		arrOfInstructions.reduce(
// 			(workingValue, instruction) => instruction(workingValue),
// 			value,
// 		);

// const pipe =
// 	(...fns) =>
// 	(x) =>
// 		fns.reduce((acc, fn) => fn(acc), x);

// let reverseString = pipe(splitOn(''), reverse, joinWith(''));

// let ans= reverseString('nashit')
// ans
