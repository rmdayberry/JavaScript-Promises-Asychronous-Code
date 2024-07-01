const favoriteNumber = 17;

function getFactAboutFavoriteNumber(number) {
  return fetch(`http://numbersapi.com/${number}?json`)
    .then((response) => response.json())
    .then((data) => data.text);
}

getFactAboutFavoriteNumber(favoriteNumber)
  .then((fact) => {
    document.getElementById("factAboutFavoriteNumber").textContent = fact;
  })
  .catch(console.error);
