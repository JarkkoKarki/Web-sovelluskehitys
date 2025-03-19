const number = parseInt(prompt('Enter a positive integer: '), 10);

if (number > 0) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  document.getElementById(
    'result'
  ).innerHTML = `Sum of natural numbers up to ${number} is ${sum}`;
} else {
  document.getElementById('result').innerHTML =
    'Please enter a positive integer.';
}
