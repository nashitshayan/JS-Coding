// ?Problem Statement
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


// My solution

function getIndexToIns(arr, num) {
    let x=0;
    
    if(arr.length==0)
    {
      return 0;
    }
    
    for(let i=0; i<arr.length; i++)
    {
      for(let j=0; j<arr.length-1;j++)
        {
          if(arr[j]>arr[j+1])
          {
            let t=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=t;
          }
        }
    }
    
    for(let i=0; i<arr.length;i++)
      {
        if(num<=arr[i])
         { 
         // console.log(i)
          x+=1;
          return i;
        }
        else
        x+=1;
    
      }
      // console.log(x)
      return x;
    
    }
    
    getIndexToIns([2,5,10], 15);



//     // Alt Soln 1

//     function getIndexToIns(arr, num) {
//         arr.sort((a, b) => a - b);
      
//         for (let i = 0; i < arr.length; i++) {
//           if (arr[i] >= num)
//             return i;
//         }
      
//         return arr.length;
//       }


//     // Alt Soln 2
// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }
//     // Alt Soln 3
//     function getIndexToIns(arr, num) {
//         // sort and find right index
//         let index = arr
//           .sort((curr, next) => curr - next)
//           .findIndex(currNum => num <= currNum);
//         // Returns index or total length of arr
//         return index === -1 ? arr.length : index;
//       }
      
//       getIndexToIns([40, 60], 500);
//     // Alt Soln 4

//     function getIndexToIns(arr, num) {
//         return arr
//           .concat(num)
//           .sort((a, b) => a - b)
//           .indexOf(num);
//       }
      
//       getIndexToIns([1, 3, 4], 2);

    