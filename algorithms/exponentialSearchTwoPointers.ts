import { binarySearchTwoPointers } from "./binarySearchTwoPointers";

export function exponentialSearchTwoPointers(arr: number[], search: number): number {
  if(arr[0] == search) return 0;
  const len = arr.length;
  if(arr[len - 1] == search) return len - 1;
  let i = 1;

  while (i < len && arr[i] < search) {
    i *= 2
  } 

  if(arr[i] == search) return i;
  return binarySearchTwoPointers(arr, search, Math.ceil(i/2), Math.min(len - 1, i))
}

// Example
const arr = Array.from({length: 50},(_,i) => ++i)
console.log(exponentialSearchTwoPointers(arr, 21));