export function binarySearchTwoPointers(arr: number[], search: number) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let steps = 0;
  while (leftPointer <= rightPointer) {
    steps++;
    if(steps >= 6) break;
    const mid = Math.floor((leftPointer + rightPointer) / 2)
    if(arr[mid] === search) return mid;
    if(arr[mid] > search) {
      rightPointer = mid - 1;
    } else {
      leftPointer = mid + 1;
    }
  }
  return -1; // Not found
}