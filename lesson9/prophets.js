const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];

    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");

      let h2 = document.createElement("h2");
      h2.innerHTML = `${prophets[i].name} ${prophets[i].lastname}`;
      h2.classList.add("h2")
      card.appendChild(h2);

      let p1 = document.createElement("p");
      p1.innerHTML = `Date of Birth: ${prophets[i].birthdate}`;
      p1.classList.add("p1")
      card.appendChild(p1);

      let p2 = document.createElement("p");
      p2.innerHTML = `Place of Birth: ${prophets[i].birthplace}`;
      p2.classList.add("p2")
      card.appendChild(p2);

      let p3 = document.createElement("p");
      p3.innerHTML = `Prophet Order: ${prophets[i].order}`;
      p3.classList.add("p3")
      card.appendChild(p3);

      let img = document.createElement("img");
      img.setAttribute('src', prophets[i].imageurl);
      img.setAttribute('alt', `A painting of ${prophets[i].name} ${prophets[i].lastname}.`);
      img.classList.add("img")
      card.appendChild(img);

      document.querySelector("div.cards").appendChild(card);
    }
  });
