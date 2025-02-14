// Number of 1 bits
// https://leetcode.com/problems/number-of-1-bits/description
function hammingWeight(n: number): number {
  let count = 0;
  while (n > 0) {
    n &= n - 1;
    count++;
  }
  return count;
};