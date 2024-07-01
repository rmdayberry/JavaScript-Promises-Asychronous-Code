$(function() {
  let baseURL = 'https://deckofcardsapi.com/;'

  $.getJSON(`${baseURL}/new/draw/`).then(data => {
    let {suit, value } = data.cards[0];
    console.log()
  }
}