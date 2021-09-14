// Problem Statement
// Return the length of the longest word in the provided sentence.
// Your response should be a number.


function findLongestWordLength(str) {
    let longestWord= -999999;
    for(let i=0;i<str.split(' ').length;i++)
    {
      let currentWord=str.split(' ')[i].length;
      if(currentWord >longestWord)
      longestWord=currentWord;
    
    }
    
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


//   efficient alternative

//   return str.split(' ')
//   .reduce(function(longest, word) {
//     return Math.max(longest, word.length)
//   }, 0)