function sortArray(numbers, order) {
  if (order === 'asc') {
    return numbers.slice().sort((a, b) => a - b);
  } else if (order === 'desc') {
    return numbers.slice().sort((a, b) => b - a);
  } else {
    throw new Error(
      "Invalid order parameter. Use 'asc' for ascending or 'desc' for descending."
    );
  }
}

const numbers = [5, 2, 8, 1, 9];

console.log('Original Array:', numbers);
console.log('Sorted Array (asc):', sortArray(numbers, 'asc'));
console.log('Sorted Array (desc):', sortArray(numbers, 'desc'));
