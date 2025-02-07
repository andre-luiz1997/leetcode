// Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/
export function containsDuplicateII219(nums: number[], k: number): boolean {
  const seen = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    seen.add(nums[i]);
    
    if (seen.size > k) {
      seen.delete(nums[i - k]);
    }
  }

  return false;
}

// VALID BUT BAD AT RUNTIME
// export function containsDuplicateII219(nums: number[], k: number): boolean {
//   // K IS THE MAX WINDOW SIZE
//   let leftPointer = 0;
//   let rightPointer = 1
//   if (nums.length < 2 || k < 1) return false;
//   while (rightPointer < nums.length) {
//     for (let i = leftPointer; i < rightPointer; i++) {
//       if (nums[i] === nums[rightPointer]) return true;
//     }
//     if(rightPointer - leftPointer >= k) {
//       leftPointer++
//     }
//     rightPointer++;
//   }

//   return false;
// }

// console.log(containsDuplicateII219([1,2,3,1],3));
// console.log(containsDuplicateII219([1,0,1,1],1));
// console.log(containsDuplicateII219([1, 2, 3, 1, 2, 3], 2));
// console.log(containsDuplicateII219([1,2,3,4,5,6,7,8,9,9],3));
// console.log(containsDuplicateII219([1, 2, 2, 3], 3));
// console.log(containsDuplicateII219([0,1,2,3,2,5], 3));
// console.log(containsDuplicateII219([1,4,2,3,1,2], 3));
