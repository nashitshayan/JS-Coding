// Problem Statement

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {
  let temp=str;
  if(num<1)
  return "";
  
  for(let i=1;i<num;i++)
  {
    str+=temp;
  }
  
  return str;
}

repeatStringNumTimes("abc", 3);