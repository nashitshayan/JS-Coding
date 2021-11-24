// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


//CODE (mine, original)

function translatePigLatin(str) {

    let strArr= str.split('');
    console.log(strArr);
    let conso= [];
    let afterConso=[];
    if(strArr[0] == 'a' || strArr[0] == 'e' || 
      strArr[0] == 'i' || strArr[0] == 'o' || strArr[0] == 'u')
      {
        return str + "way";
      }
    else
    {
      for(let i=0; i<strArr.length; i++)
     {
       if(strArr[i] == 'a' || strArr[i] == 'e' || 
      strArr[i] == 'i' || strArr[i] == 'o' || strArr[i] == 'u')
      
      {afterConso=strArr.slice(i);
      break;}
      else {conso.push(strArr[i]);}
     }
     
    }
    return afterConso.join('')+ conso.join('')+ "ay";
  }
  translatePigLatin("schwartz");



  // ALT 1 (mine, with regex)

  function translatePigLatin(str) {

    let strArr= str.split('');
    console.log(strArr);
    let conso= [];
    //console.log(typeof str[0])
    let afterConso=[];
    if(str[0].match(/a|e|i|o|u/))
      {
        return ( str + "way");
      }
    else
    {
      for(let i=0; i<strArr.length; i++)
     {
       if(str[i].match(/a|e|i|o|u/))
      
      {afterConso=strArr.slice(i);
      break;}
      else {conso.push(strArr[i]);}
     }
     
    }
    console.log(afterConso);
    console.log(conso)
    return afterConso.join('')+ conso.join('')+ "ay";
  }
  translatePigLatin("schwartz");



  //ALT 2

  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");