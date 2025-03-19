const movies = [];
const numberOfMovies = parseInt(
  prompt('Enter the number of movies you want to rate:'),
  10
);

for (let i = 0; i < numberOfMovies; i++) {
  const title = prompt(`Enter the title of movie ${i + 1}:`);
  const rating = parseFloat(
    prompt(`Enter the rating for "${title}" (1 to 5):`)
  );
  if (!isNaN(rating) && rating >= 1 && rating <= 5) {
    movies.push({title, rating});
  } else {
    alert('Enter a number between 1 and 5.');
    i--;
  }
}

if (movies.length > 0) {
  movies.sort((a, b) => b.rating - a.rating);
  const highestRatedMovie = movies[0];

  const resultElement = document.getElementById('result');
  let resultHTML = '<h2>Sorted List of Movies:</h2><ul>';
  movies.forEach((movie) => {
    resultHTML += `<li>${movie.title} - Rating: ${movie.rating}</li>`;
  });
  resultHTML += '</ul>';
  resultHTML += `<h2>Highest Rated Movie:</h2><p>${highestRatedMovie.title} - Rating: ${highestRatedMovie.rating}</p>`;
  resultElement.innerHTML = resultHTML;
} else {
  alert('No valid movies were entered.');
}
