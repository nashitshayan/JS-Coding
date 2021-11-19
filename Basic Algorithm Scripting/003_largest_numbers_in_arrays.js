// Problem Statement

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
    let tempArr=[];
    for(let i=0; i<arr.length;i++)
    {
      let currMaxElem=-99999;
      for(let j=0;j<arr[i].length;j++)
      {
        if(arr[i][j]>currMaxElem)
        currMaxElem=arr[i][j];
      }
      tempArr.push(currMaxElem);
    }
    
    return tempArr;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);