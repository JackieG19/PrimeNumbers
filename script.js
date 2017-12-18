/* input - number, may not prime, integer
 output - integer, sum of prime number (+) from 2 uo to input
 Example: input: 10   output: 17    [2+3+5+7=17]
 
----Function #1----
1. Run total start at 0
2. find prime numbers for ranges 2 thru 10
   3.num = 2
4. check if num is prime
       5. Add num to run total
 6. Check if your number is not prime
 7. if not
   8. Repeat with next num
9. print run total
10. is prime

----Function #2----
input: number, integer positives only
output: boolean
  loop 2 thru n (non inclusive)
    check if input is divisible by current number
      not prime
*/ 
/*
function isPrimes(num) {
  num = num + 4;
}

function sumPrimes(num) {
    console.log("before", num);
    isPrime(num);
  console.log("after", num);
  
  return num;
}

both (num) do not affect each other
*/

sumPrimes(10);

function isPrimes(num){
  for(var n = 2; n < num; n++){
    if(num % n === 0){
      return false; //not prime numbers
      
    }
  }
  return true;
}

function sumPrimes(num) {
  var total = 0;
  for(var n = 2; n <= num; n++){
    //console.log("inter", n);
    if(isPrimes(n)){
      //console.log("is prime");
      total += n;  // total = total + n    
      //console.log("loop");
    }
  } //repeat 
  return total;
}

//console.log("2", isPrime(2));
//console.log("5", isPrime(5));
//console.log("9", isPrime(9));

sumPrimes(10);