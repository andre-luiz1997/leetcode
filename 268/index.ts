// Missing Number 
// https://leetcode.com/problems/missing-number/description/

function missingNumber(nums: number[]): number {
  let x = 0;
  nums.forEach(num => {x ^= num})

  for (let i = 0; i < nums.length; i++) {
      x ^= (i + 1);
  }

  return x;
};