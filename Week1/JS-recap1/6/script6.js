function generateMultiplicationTable(num) {
  let table = '<table border="1">';
  for (let i = 1; i <= num; i++) {
    table += '<tr>';
    for (let j = 1; j <= num; j++) {
      table += `<td>${i * j}</td>`;
    }
    table += '</tr>';
  }
  table += '</table>';
  document.getElementById('result').innerHTML = table;
}

const number = parseInt(prompt('Enter a positive integer: '), 10);
if (number > 0) {
  generateMultiplicationTable(number);
} else {
  document.getElementById('result').innerHTML = 'enter a positive integer.';
}
