function partition(array: number[], low: number, high: number) {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if(array[j] <= pivot) {
      i++;
      [array[i],array[j]] = [array[j],array[i]];
    }
  }
  
  [array[i + 1], array[high]] = [array[high], array[i + 1]]
  return i + 1;
}


export function quickSort(array: number[], i = 0, max = array.length - 1) {
  if(i < max) {
    const pivotIdx = partition(array, i, max);
    quickSort(array, i, pivotIdx - 1)
    quickSort(array, pivotIdx + 1, max)
  }
  return array;
}
console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6, 5]))