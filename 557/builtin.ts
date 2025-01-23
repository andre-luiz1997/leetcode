// Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
function reverseWordsBuiltin557(s: string): string {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};