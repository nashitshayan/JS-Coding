// Problem Statement
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.



// // My Solution

// function mutation(arr) {

//     arr[0]=arr[0].toLowerCase();
//     arr[1]=arr[1].toLowerCase();
  
  
//   let arr1= arr[0].split('');
//   let arr2= arr[1].split('');
//   let arr3= [];
  
//   for(let i=0; i< arr2.length;i++)
//   {
//     for(let j=0; j<arr1.length;j++)
//     {
//       if(arr2[i]===arr1[j])
//       {
//         arr3.push(arr2[i]);
//         break;
//       }
//     }
//   }
  
  
//     return (arr3.join('')===arr2.join(''));
//   }
  
//   mutation(["hello", "hey"]);



// //   Alt Soln 1

//   function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }



// //   Alt Soln 1

//   function mutation(arr) {
//     return arr[1]
//       .toLowerCase()
//       .split("")
//       .every(function(letter) {
//         return arr[0].toLowerCase().indexOf(letter) != -1;
//       });
//   }



// //   Alt Soln 1
//   function mutation([ target, test ], i = 0) {
//     target = target.toLowerCase();
//     test = test.toLowerCase();
//     return i >= test.length
//       ? true
//       : !target.includes(test[i])
//         ? false
//         : mutation([ target, test ], i + 1);
//   }