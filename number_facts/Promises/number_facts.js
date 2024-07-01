$(document).ready(function () {
  let favoriteNum = 17;
  let baseURL = "http://numbersapi.com";

  $.getJSON(`${baseURL}/${favoriteNum}?json`).then((data) => {
    console.log(data);
    $("#factFavoriteNumber").text(data.text);
  });

  // 2. Get data on multiple numbers in a single request
  let favNumbers = [80, 14, 5, 33];
  $.getJSON(`${baseURL}/${favNumbers}?json`).then((data) => {
    console.log(data);
    const factsList = $("#factsNumbers");
    Object.values(data).forEach((fact) => {
      factsList.append(`<li>${fact}</li>`);
    });
  });

  // 3. Get 4 facts about the favorite number
  Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favoriteNum}?json`);
    })
  )
    .then((facts) => {
      const factsList = $("#fourFactsFavoriteNumber");
      facts.forEach((data) => {
        factsList.append(`<li>${data.text}</li>`);
      });
    })
    .catch(console.error);
});
