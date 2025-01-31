// First Unique Character On A String
// https://leetcode.com/problems/first-unique-character-in-a-string/description/

// SOLUTION USING INDEXES -- SIMPLER BUT LAST EFFECTIVE
// export function firstUniqueCharacterOnAStringBuiltin387(s: string) {
//   const sArr = s.split('')
//   return sArr.findIndex((char, index) => sArr.indexOf(char) === sArr.lastIndexOf(char)) ?? -1;
// }

// SOLUTION USING MAP -- COMPLEX BUT MORE EFFECTIVE
export function firstUniqueCharacterOnAStringBuiltin387(s: string) {
  const map = new Map<string, [index: number, occurrences: number]>();

  Array.from(s).forEach((char, index) => {
    if (!map.has(char)) map.set(char, [index, 1])
    else {
      const arr = map.get(char)!;
      map.set(char, [arr[0], ++arr[1]])
    }
  })
  for (const [char, value] of map) {
    if(value[1] === 1) return value[0];
  }
  return -1;
}

console.log(firstUniqueCharacterOnAStringBuiltin387("leetcode"))
// console.log(firstUniqueCharacterOnAStringBuiltin387("loveleetcode"))
// console.log(firstUniqueCharacterOnAStringBuiltin387("aabb"))