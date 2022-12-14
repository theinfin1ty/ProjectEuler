/* 

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

const solution = (n) => {
  let sum = 0;
  let a = 1;
  let b = 2;
  let c = 0;
  while (c < n) {
    if (c % 2 === 0) {
      sum += c;
    }
    c = a + b;
    a = b;
    b = c;
  }
  return sum + 2;
}

console.log(solution(4000000));