function distanceOfTwoPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const x1 = prompt('Enter x1: ');
const y1 = prompt('Enter y1: ');

const x2 = prompt('Enter x2: ');
const y2 = prompt('Enter y2: ');

const distance = distanceOfTwoPoints(x1, y1, x2, y2);
document.getElementById('result').innerHTML = `Distance: ${distance}`;
