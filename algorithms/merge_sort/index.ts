function merge(array: number[], leftArray: number[], rightArray: number[]) {
  const leftSize = Math.ceil(array.length / 2);
  const rightSize = array.length - leftSize;
  let i = 0; // array index
  let l = 0; // left index
  let r = 0; // right index 
  while (l < leftSize && r < rightSize) { // There are elements within both arrays
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l]
      l++;
    } else {
      array[i] = rightArray[r];
      r++;
    }
    i++;
  }

  while (l < leftSize) { // Merging remaining elements on leftArray
    array[i] = leftArray[l];
    i++;
    l++;
  }
  while (r < rightSize) { // Merging remaining elements on rightArray
    array[i] = rightArray[r];
    i++;
    r++;
  }
}

export function mergeSort(array: number[]) {
  const length = array.length;
  if (length <= 1) return;
  const middle = Math.ceil(length / 2);
  const leftArray = new Array<number>(middle);
  const rightArray = new Array<number>(length - middle);
  let i = 0; // left array
  let j = 0; // right array

  for (; i < length; i++) { //Dividing array into left and right
    if (i < middle) {
      leftArray[i] = array[i];
    } else {
      rightArray[j] = array[i];
      j++;
    }
  }

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(array, leftArray, rightArray);
}

const array = [5, 1, 2, 7, 0, 12, 3];
mergeSort(array)
console.log(array.toString());