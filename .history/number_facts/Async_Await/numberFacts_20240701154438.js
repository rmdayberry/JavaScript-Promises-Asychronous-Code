async function getFact(favoriteNumber) {
  const response = await fetch(`http://numbersapi.com/${favoriteNumber}?json`);
  const data = await response.json();
  document.getElementById("single-fact").innerText = data.text;
}

async function getMultipleFacts(numbers) {
  const response = await fetch(`http://numbersapi.com/${numbers}?json`);
  const data = await response.json();
  const factsContainer = document.getElementById("multiple-facts");
  for (const key in data) {
    const factElement = document.createElement("p");
    factElement.innerText = data[key];
    factsContainer.appendChild(factElement);
  }
}

async function getFavoriteNumberFacts(favoriteNumber, count) {
  const factsContainer = document.getElementById("favorite-facts");
  for (let i = 0; i < count; i++) {
    const response = await fetch(
      `http://numbersapi.com/${favoriteNumber}?json`
    );
    const data = await response.json();
    const factElement = document.createElement("p");
    factElement.innerText = data.text;
    factsContainer.appendChild(factElement);
  }
}

const favoriteNumber = 22;
getSingleFact(favoriteNumber);

const numbers = [88, 33, 55, 66].join(",");
getMultipleFacts(numbers);

getFavoriteNumberFacts(favoriteNumber, 4);
