export function bubbleSort(array: number[]) {
  const size = array.length;
  for (let _ = 0; _ < size; _++) {
    let isSorted = true;
    for (let i = 0; i < size - 1; i++) {
      if(array[i] > array[i+1]) {
        isSorted = false;
        [array[i],array[i + 1]] = [array[i+1],array[i]]
      }
    }
    if(isSorted) return array;
  }
  return array;
}
console.log(bubbleSort([1,2,5,1,6,2,0]))