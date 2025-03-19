function typeOfTriangle(a, b, c) {
  if (a == b && b == c) {
    return 'Equilateral';
  } else if (a == b || b == c || a == c) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}

const a = prompt('Enter the first side of the triangle');
const b = prompt('Enter the second side of the triangle');
const c = prompt('Enter the third side of the triangle');

const type = typeOfTriangle(a, b, c);
document.getElementById('result').innerHTML = `Type of Triangle: ${type}`;
