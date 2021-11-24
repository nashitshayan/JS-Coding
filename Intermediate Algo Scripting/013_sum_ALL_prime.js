// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


//CODE

function isPrime(num)
{
  let c=2;
  while(c*c<=num)
  {
    if(num%c==0)
    return false;

    c+=1;
  }
  return true;
}

function sumPrimes(num) {
let sum=0;
  for(let i=2; i<=num;i++)
  {
    
    if(isPrime(i))
    sum+=i;
  }
  return sum;
}

let res= sumPrimes(977);
console.log(res)