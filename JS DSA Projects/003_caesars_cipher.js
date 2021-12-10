// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


//CODE

function rot13(str) {
    let strArr= str.split("")
    let res=[];
   for(let i=0; i<strArr.length;i++)
   {
     if(str.charCodeAt(i)<78)
     {
       res.push(strArr[i].replace(/[A-Za-z]/, 
     String.fromCharCode(91-(13-(str.charCodeAt(i)-65)))))
     }
     else
     {res.push(strArr[i].replace(/[A-Za-z]/, 
     String.fromCharCode(str.charCodeAt(i)-13)))}
   }
  //  console.log(strArr)
    console.log(res.join(""))
    return res.join("");
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!")
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
  