document.addEventListener('DOMContentLoaded', () => {
  let deckId;

  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => response.json())
  .then(data)