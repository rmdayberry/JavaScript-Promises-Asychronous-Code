const favoriteNumber = 17;

function factsFavoriteNumber(number) {
  return fetch(`http://numbersapi.com/${number}?json`)
    .then((response) => response.json())
    .then((data) => data.text);
}

factsFavoriteNumber(favoriteNumber)
  .then((fact) => {
    document.getElementById("factsFavoriteNumber").textContent = fact;
  })
  .catch(console.error);

const numbers = [1, 2, 3, 4, 5]; // Example numbers

function factsFavoriteNumbers(numbers) {
  return fetch(`http://numbersapi.com/${numbers.join(",")}/?json`).then(
    (response) => response.json()
  );
}

factsFavoriteNumbers(numbers)
  .then((facts) => {
    const factsList = document.getElementById("factsAboutMultipleNumbers");
    Object.values(facts).forEach((fact) => {
      const listItem = document.createElement("li");
      listItem.textContent = fact;
      factsList.appendChild(listItem);
    });
  })
  .catch(console.error);
