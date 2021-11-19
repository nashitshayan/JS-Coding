//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

//Problem Statement


//Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

//Note: Your function should not use any kind of for or while loops or the forEach() function.


//code


const squareList = arr => {
    // Only change code below this line
   return arr.reduce((acc,curr)=>{
      if(curr>0 && curr%1 ===0)
      {acc.push(curr*curr);}
      return acc;
      }, []);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);