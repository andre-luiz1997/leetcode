// Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
function reverseWordsTwoPointers557(s: string): string {
  // Implemented using the Two Pointers technique
  const reverseWord = (word: string): string => {
    const wordArray = word.split('');
    if (!wordArray.length) return '';
    let leftPointer = 0;
    let rightPointer = wordArray.length - 1;
    while (leftPointer < rightPointer) {
      const ch = wordArray[leftPointer];
      wordArray[leftPointer] = wordArray[rightPointer];
      wordArray[rightPointer] = `${ch}`;
      leftPointer++;
      rightPointer--;
    }
    return wordArray.join('');
  }
  return s.split(' ').map(reverseWord).join(' ')
};