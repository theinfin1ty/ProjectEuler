/* 

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

const isPalindrome = (n) => {
  let original = n;
  let reversed = 0;
  while (original > 0) {
    let digit = original % 10;
    reversed = reversed * 10 + digit;
    original = Math.floor(original / 10);
  }
  return n === reversed;
}

const solution = (n) => {
  let largest = 0;
  for (let i = 100; i < n; i++) {
    for (let j = 100; j < n; j++) {
      const product = i * j;
      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }
  return largest;
}

console.log(solution(1000));