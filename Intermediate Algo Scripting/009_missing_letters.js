// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

//CODE


function fearNotLetter(str) {
    if  (str==="abcdefghijklmnopqrstuvwxyz")
    return undefined;
  
    
    let startCharCode= str.charCodeAt(0)
    let endCharCode= str.charCodeAt(str.length-1)
    let compareArr=[];
    let strArr= str.split("");
    for(let i=startCharCode; i<=endCharCode; i++)
    { 
      compareArr.push(String.fromCharCode(i))
    }
  
    return (compareArr
              .filter(char=> !strArr.includes(char))
              .join());
  }
  
  let res= fearNotLetter("abcdefghijklmnopqrstuvwxyz");
  console.log(res)



  //ALT 
  function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }