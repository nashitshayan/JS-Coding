// Problem Statement
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
    let tempStrArr=[];
    for(let i=str.length-target.length;i<str.length;i++)
    {
      tempStrArr.push(str[i]);
    }
    
  
    return tempStrArr.join('')===target;
  }
  
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");