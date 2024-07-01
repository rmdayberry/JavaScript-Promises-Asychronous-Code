let favoriteNumber = 44;
let baseURL = "http://numbersapi.com";

// 1.
async function favoriteNum() {
  let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
  console.log(data);
  $('#single-fact').append(`<p>${data.text}</p>`);
}
favoriteNum();

// 2.
const favNumbers = [77, 66, 99];
async function multipleNums() {
  let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`);
  console.log(data);
  for (const key in data) {
    $('#multiple-facts').append(`<p>${data[key]}</p>`);
  }
}
multipleNums();

// 3.
async function () {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('#favorite-facts').append(`<p>${data.text}</p>`);
  });
}
part3();
