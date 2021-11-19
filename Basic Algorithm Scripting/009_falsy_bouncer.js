// Problem Statement

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


function bouncer(arr) {
    let temp=[];
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]) 
      temp.push(arr[i]);
    }
    return temp;
  }
  
  bouncer([7, "ate", "", false, 9]);



//   Alternative cool solution 

// function bouncer(arr) {
//     return arr.filter(Boolean);
//   }