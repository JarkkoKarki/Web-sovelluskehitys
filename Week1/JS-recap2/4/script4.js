function sortArray(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

const originalArray = [10, 5, 7, 3, 9];
console.log('Original Array:', originalArray);

const sortedArray = sortArray(originalArray);
console.log('Sorted Array:', sortedArray);
