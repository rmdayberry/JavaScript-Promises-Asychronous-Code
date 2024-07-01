async function getFact(favoriteNumber) {
  const response = await fetch(`http://numbersapi.com/${}?json`);
  const data = await response.json();
  document.getElementById('single-fact').innerText = data.text;
}

async function getMultipleFacts(numbers) {
  const response = await fetch(`http://numbersapi.com/${numbers}?json`);
  const data = await response.json();
  const factsContainer = document.getElementById('multiple-facts');
  for (const key in data) {
    const factElement = document.createElement('p');
    factElement.innerText = data[key];
    factsContainer.appendChild(factElement);
  }
}

async function getFavoriteNumberFacts(favoriteNumber, count) {
  const factsContainer = document.getElementById('favorite-facts');
  for (let i = 0; i < count; i++) {
    const response = await fetch(`http://numbersapi.com/${favoriteNumber}?json`);
    const data = await response.json();
    const factElement = document.createElement('p');
    factElement.innerText = data.text;
    factsContainer.appendChild(factElement);
  }
}

const favoriteNumber = 7; // Replace with your favorite number
getSingleFact(favoriteNumber);

const numbers = [3, 6, 9, 12].join(','); // Replace with the numbers you want
getMultipleFacts(numbers);

getFavoriteNumberFacts(favoriteNumber, 4);