export function binarySearchTwoPointers(arr: number[], search: number, leftPointer = 0, rightPointer?: number): number {
  let steps = 0;
  if(rightPointer == undefined) {
    rightPointer = arr.length - 1;
  }
  while (leftPointer <= rightPointer) {
    steps++;
    if (steps >= 6) break;
    const mid = Math.floor((leftPointer + rightPointer) / 2)
    if (arr[mid] === search) return mid;
    if (arr[mid] > search) {
      rightPointer = mid - 1;
    } else {
      leftPointer = mid + 1;
    }
  }
  return -1; // Not found
}