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


function dropdown(){
    let menuBtn= document.getElementById('menuBtn');

    menuBtn.addEventListener('click', handleMenuClick)
}

const handleMenuClick= ()=> {
    let nav= document.getElementById('nav');
    nav.classList.toggle('nav-dropdown');
}
dropdown();

