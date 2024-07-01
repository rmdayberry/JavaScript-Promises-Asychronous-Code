$(function() {
  let baseURL = 'https://deckofcardsapi.com/;'

  $.getJSON(`${baseURL}/new/draw/`).then(data => {
    let {suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });

  let firstCard = null;
  $.getJSON(`${baseURL}/new/draw/`)
  .then(data => {
    firstCard = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`${baseURL}/${deckId}/draw/`);
  })
  .then(data =>) {
    let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function(card) {
        console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
      });
    });
  
  let deckId = null;
  let $btn = $(`button`);
  let $cardSpace = $(`#card-space`);

  