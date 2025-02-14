// Counting bits
// https://leetcode.com/problems/counting-bits/description

// O(n log(n))
function countBits(n: number): number[] {
  const hammingWeight = (n: number): number => {
    let count = 0;
    while (n > 0) {
      n &= n - 1;
      count++;
    }
    return count;
  };
  const ans: number[] = []
  let count = 0;
  while(count <= n) {
    ans[count] = hammingWeight(count);
    count++;
  }    
  return ans;
};