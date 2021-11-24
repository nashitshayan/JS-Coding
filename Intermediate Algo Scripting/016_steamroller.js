// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.




//CODE

function steamrollArray(arr) {
    let finalArr=[];
  
    function recur(arr){
      if(arr.length===1 && !Array.isArray(arr[0]))
      finalArr.push(arr[0]);
      
      else
      {
        for(let i=0; i<arr.length;i++)
        {
          if(Array.isArray(arr[i]))
            recur(arr[i]);
          else
            finalArr.push(arr[i])
        }
      }
    }
    recur(arr);
    return finalArr;
  }
  
  
  let res=steamrollArray([[["a"],[[[[[[[[[2,[[[[[[[[4]]]]]]]]]]]]]]]]]], [["b"]]]) //should return ["a", "b"].
  console.log(res)
  


  //ALT 1

  function steamrollArray(arr) {
    let finalArr=[];
  
    for(let i=0; i<arr.length;i++)
      {
          if(Array.isArray(arr[i]))
            finalArr.push(...steamrollArray(arr[i]));
          else
            finalArr.push(arr[i])
      }
  
    return finalArr;
  }
  
  
  let res=steamrollArray([[["a"],[[[[[[[[[2,[[[[[[[[4]]]]]]]]]]]]]]]]]], [["b"]]]) //should return ["a", "b"].
  console.log(res)
  