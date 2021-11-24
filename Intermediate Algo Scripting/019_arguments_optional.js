// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


//CODE

function isNumber(num)
{
  return num=== parseInt(num);
}

function addTogether(...args) {
  
  if(args.length==1 && isNumber(args[0]))
  {
    return (arg)=> { 
      if(isNumber(arg))
        return args[0]+arg;
      return undefined;   
     }
  }
  else if(isNumber(args[0]) && isNumber(args[1]))
    return args[0]+args[1];
  
  return undefined;
  
  
}
//console.log([] === parseInt([]))
var sumTwo= addTogether(3);

console.log(sumTwo(4))