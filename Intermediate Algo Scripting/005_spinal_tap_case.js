// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



//I was unable to pass all test cases. Couldnt make the right regex


//CODE

function spinalCase(str) {


    console.log (str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase())
     
   }
   
   spinalCase("AllThe-small Things")
    spinalCase("This Is Spinal Tap")
    spinalCase('The_Andy_Griffith_Show');
   spinalCase("thisIsSpinalTap");
   spinalCase("Teletubbies say Eh-oh")




   //ALT 1

   function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");


  //ALT 2

  function spinalCase(str) {

    let cam=  str.replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase().split(/[\s_]/).join('-');
    return cam;
    
  }
  
  console.log (spinalCase('thisIsSpinalTap'));