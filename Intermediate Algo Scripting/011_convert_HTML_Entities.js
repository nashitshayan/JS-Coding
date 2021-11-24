// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//CODE

function convertHTML(str) {
 
    let strArr= str.split("");
  
    for(let i=0; i<strArr.length; i++)
    {
      switch(strArr[i])
      {
        case '&': strArr[i]= "&amp;";
                break;
        case '<': strArr[i]= "&lt;";
                break;
        case '>': strArr[i]= "&gt;";
                break;
        case '"': strArr[i]= "&quot;";
                break;
        case "'": strArr[i]= "&apos;";
                break;
        
      }
    }
    return strArr.join("");
  }
  
  let res= convertHTML('Stuff in "quotation marks"');
  console.log(res)



  //ALT 1
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");


  //alt 2
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  // test here
  convertHTML("Dolce & Gabbana");