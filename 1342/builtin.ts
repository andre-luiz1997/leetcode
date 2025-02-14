// Number of steps to reduce a number to zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) {
    if (num & 1) {
      num -= 1;
    } else {
      num >>= 1;
    }
    steps++;
  }
  return steps;
};


//Without bitwise operators
// function numberOfSteps(num: number): number {
//   let steps = 0;
//   while (num > 0) {
//     if (num % 2 == 0) {
//       num -= 1;
//     } else {
//       num /= 2;
//     }
//     steps++;
//   }
//   return steps;
// };