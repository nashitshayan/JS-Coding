// Problem Statement

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function titleCase(str) {

    let arr= str.split(' ');
    let arrNew= [];
    // console.log(arr)
  
    for(let i=0;i<arr.length;i++)
    {
      arr[i]=arr[i].toLowerCase();
      
      // console.log(arr[i].split(''))
      let temp = arr[i].split('');
      temp[0]= temp[0].toUpperCase();
      arrNew.push(temp.join(''))
   }
    
    // console.log(arr[3].split('')[0].toUpperCase())
    return arrNew.join(' ');
  }
  
  titleCase("I'm a little tea pot");




//   alternate solution

// function titleCase(str) {
//     var newTitle = str.split(" ");
//     var updatedTitle = [];
//     for (var st in newTitle) {
//       updatedTitle[st] = newTitle[st]
//         .toLowerCase()
//         .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//     }
//     return updatedTitle.join(" ");
//   }