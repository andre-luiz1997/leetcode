// Maximum Length Substring With Two Occurrences
// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/
export function slidingWindowSubstringTwoOccurrences3090(s: string): number {
  let leftPointer = 0;
  const counts = new Map<string, number>()
  let max = 1;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const currentChar = s[rightPointer];
    counts.set(currentChar, (counts.get(currentChar) || 0) + 1)

    while (counts.get(currentChar)! > 2) {
      const leftChar = s[leftPointer]
      counts.set(leftChar, counts.get(leftChar)! - 1)
      leftPointer++;
    }

    max = Math.max(max, rightPointer - leftPointer + 1)
  }
  return max;
}