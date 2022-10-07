/* 

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

const solution = (n) => {
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      n = n / i;
    } else {
      i++;
    }
  }
  return n;
}

console.log(solution(600851475143));