const numbers = [];
let input;

while (true) {
  input = prompt("Enter a number (or 'done' to finish):");
  if (input.toLowerCase() === 'done') {
    break;
  }
  const number = parseFloat(input);
  if (!isNaN(number)) {
    numbers.push(number);
  }
}

const evenNumbers = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

const resultElement = document.getElementById('result');
if (evenNumbers.length > 0) {
  resultElement.innerHTML = `Even Numbers: ${evenNumbers.join(', ')}`;
} else {
  resultElement.innerHTML = 'Even Numbers: None';
}
