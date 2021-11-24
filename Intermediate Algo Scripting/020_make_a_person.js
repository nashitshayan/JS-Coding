// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.


//CODE


const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fName= firstAndLast;
    this.getFirstName = ()=>fName.split(" ")[0];
  
    this.getLastName = ()=> fName.split(" ")[1];
  
    this.getFullName = ()=> fName;
  
    this.setFirstName= (first)=>{
      fName= first + " " + fName.split(" ")[1];
    }
  
    this.setLastName= (last)=> {
      fName= fName.split(" ")[0] + " " + last;
    }
  
    this.setFullName= (firstAndLast)=> {
      fName= firstAndLast};
  };
  
  
  const bob = new Person('Bob Ross');
  
  //console.log(Object.keys(bob).length) //should always return 6.
  
  //console.log(bob instanceof Person ) //should return true.
  
  //console.log(bob.firstName) //should return undefined.
  
  //console.log(bob.lastName) //should return undefined.
  
  //console.log(bob.getFirstName()) //should return the string Bob.
  
  //console.log(bob.getLastName()) //should return the string Ross.
  
  //console.log(bob.getFullName()) //should return the string Bob Ross.
  //
  //bob.setFirstName("Haskell")
  //console.log(bob.getFullName()) //should return the string Haskell Ross after bob.setFirstName("Haskell").
  
  //console.log(bob.getFullName()) //should return the string Haskell Curry after bob.setLastName("Curry").
  
  //console.log(bob.getFullName()) //should return the string Haskell Curry after bob.setFullName("Haskell Curry").
  
  //console.log(bob.getFirstName()) //should return the string Haskell after bob.setFullName("Haskell Curry").
  
  //console.log(bob.getLastName()) //should return the string Curry after bob.setFullName("Haskell Curry").

  
  