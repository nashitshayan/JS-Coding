// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


//CODE

function sumFibs(num) {
    if(num==1)
    return 1;
    
    let prev=1;
    let curr=2;
    let sum=2;
    while(curr<=num)
    {
      if(curr%2!=0)
      {
        sum+=curr
      }
      let t= curr;
      curr+=prev;
      prev=t;
      
    }
    
    return sum;
  }
  
  let res= sumFibs(13);
  console.log(res)