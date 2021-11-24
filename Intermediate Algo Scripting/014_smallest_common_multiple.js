// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


//CODE




function smallestCommons(arr) {
  let range=[];
  let first=arr[0];
  let second = arr[1];
  if(first > second)
  {
    let temp= first;
    first=second;
    second= temp;
  }
for(let i=first; i<=second;i++)
{
  range.push(i);
}

console.log(range)

let multiple= 1;

while(multiple<100000)
{
  let higher= (first* multiple)* second;

  let trueCount=0;

  for(let i=0; i<range.length;i++)
  {
    if(higher% range[i]==0)
    trueCount+=1;
 
    if(trueCount===range.length)
    return higher;
  }
   multiple+=1;
 }

}

let res= smallestCommons([1,13]);
console.log(res)