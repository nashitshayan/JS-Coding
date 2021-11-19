// Problem Statement

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
    let temp=[];
    for(let i=0;i<num ;i++)
    {
      temp.push(str[i]);
    }
    if(num>=str.length)
    return str;
    else
    return (temp.join('')+'...');
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);