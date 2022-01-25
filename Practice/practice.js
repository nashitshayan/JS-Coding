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


const aModule = (()=>{
    const log= ()=> console.log('a module\'s log');
    return {log}
})();

console.log(aModule)
aModule.log();