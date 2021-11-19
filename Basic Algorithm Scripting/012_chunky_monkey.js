// Problem Statement 
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


// My soln

function chunkArrayInGroups(arr, size) {
    // let test= arr.splice(0,size);
    // let test2=[];
    // test2[0]=test;
    // console.log(test2)
  
  
    let resArr=[];
    let num= arr.length/size;
    
    for(let i=0; i<num;i++)
    {
      resArr[i]=arr.splice(0,size);
    }
  // console.log()
    return resArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);




// //   Alt soln 1

// function chunkArrayInGroups(arr, size) {
//     let temp = [];
//     let result = [];
  
//     for (let a = 0; a < arr.length; a++) {
//       if (a % size !== size - 1) temp.push(arr[a]);
//       else {
//         temp.push(arr[a]);
//         result.push(temp);
//         temp = [];
//       }
//     }
  
//     if (temp.length !== 0) result.push(temp);
//     return result;
//   }




// //   Alt soln 2

//   function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//     }
//     return newArr;
//   }



//   //   Alt soln 3

//   function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = [];
//     let i = 0;
  
//     while (i < arr.length) {
//       newArr.push(arr.slice(i, i + size));
//       i += size;
//     }
//     return newArr;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);




//   //   Alt soln 4


//   function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     while (arr.length > 0) {
//       newArr.push(arr.splice(0, size));
//     }
//     return newArr;
//   }



//   //   Alt soln 5

//   function chunkArrayInGroups(arr, size) {
//     if (arr.length <= size) {
//       return [arr];
//     } else {
//       return [arr.slice(0, size)].concat(
//         chunkArrayInGroups(arr.slice(size), size)
//       );
//     }
//   }