export function bubbleSort(array: number[]) {
  const size = array.length;

  for (let _ = 0; _ < array.length; _++) {
    let isSorted = true;
    console.log(array);
    for (let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i+1]) {
        isSorted = false;
        const val = array[i]
        array[i] = array[i + 1]
        array[i + 1] = val;
      }
    }
    if(isSorted) return array;
  }
  return array;
}

console.log(bubbleSort([1,2,5,1,6,2,0]))