// Two Sum
// https://leetcode.com/problems/two-sum/description/
export function twoSumBuiltin1(nums: number[], target: number) {

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    for (let index2 = index + 1; index2 < nums.length; index2++) {
      const num2 = nums[index2];
      if(num + num2 === target) return [index, index2]
    }
  }
  // for (const [num, index] of nums) {
  //   for (const [num2, index2] of nums.splice(index, nums.length -1)) {
  //   }
  // }

  // nums.forEach((num, index) => {
  //   nums.splice(index, nums.length).forEach((num2, index2) => {
  //   })
  // })
}

console.log(twoSumBuiltin1([2,7,11,15],9))
console.log(twoSumBuiltin1([3,2,4],6))
console.log(twoSumBuiltin1([3,3],6))