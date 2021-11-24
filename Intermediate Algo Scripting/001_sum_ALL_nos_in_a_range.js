// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.



//CODE


function sumAll(arr) {
  
    let start= Math.min(arr[0],arr[1]);
    let end =Math.max(arr[0],arr[1]);
    let sum=0;
    for(let i=start;i<=end;i++)
    {
      sum+=i;
    }
  
  
    
    return sum;
  }
  
  sumAll([4, 1]);


  //ALT 1

  const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };


  //ALT 2
  //Recursive Solution

function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll([1, 4]);