// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

//CODE

function binaryAgent(str) {
    let strArr= str.split(" ");
    let final=[];
  
    strArr.map(strBinary=>{
      let strBinArr= strBinary.split("").reverse()
      let dec=0;
      for(let i=0;i<strBinArr.length;i++)
      {if(strBinArr[i]==1)
         dec +=Math.pow(2,i);
      }
      final.push(String.fromCharCode(dec))
    })
    console.log(final.join(""))
    return final.join("");
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



  //ALT 1

  function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // we then simply join the string
    return uniString.join("");
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );