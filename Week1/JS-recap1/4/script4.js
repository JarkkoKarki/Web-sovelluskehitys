function scoreToGrade(score) {
  if (score <= 39) {
    return 0;
  } else if (score <= 51) {
    return 1;
  } else if (score <= 63) {
    return 2;
  } else if (score <= 75) {
    return 3;
  } else if (score <= 87) {
    return 4;
  } else if (score <= 100) {
    return 5;
  } else {
    return 'Invalid score';
  }
}

const score = prompt('Enter a score: ');
const grade = scoreToGrade(score);
document.getElementById('result').innerHTML = `Grade: ${grade}`;
