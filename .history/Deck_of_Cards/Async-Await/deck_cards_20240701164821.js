$(function () {
  let baseURL = "https://deckofcardsapi.com/api/deck";

  // 1. Draw a single card and log the value and suit
  async function singleCard() {
    let data = await $.getJSON(`${baseURL}/new/draw/`);
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    $("#single-card").append(
      `<p>${value.toLowerCase()} of ${suit.toLowerCase()}</p>`
    );
  }
  singleCard();

  // 2. Draw two cards from the same deck and log the values and suits
  async function twoCards() {
    let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    [firstCardData, secondCardData].forEach((cardData) => {
      let { suit, value } = cardData.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
      $("#two-cards").append(
        `<p>${value.toLowerCase()} of ${suit.toLowerCase()}</p>`
      );
    });
  }
  twoCards();

  // 3. Draw cards from a deck until no cards are left
  async function allTheWay() {
    let $btn = $("#draw-card");
    let $cardArea = $("#card-space");

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on("click", async function () {
      let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $("<img>", {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
          },
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  allTheWay();
});
