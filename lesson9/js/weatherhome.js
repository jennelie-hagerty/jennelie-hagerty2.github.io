const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (i == 0 || i == 2 || i == 6) {
        let card = document.createElement("section");

        let h2 = document.createElement("h2");
        h2.innerHTML = `${towns[i].name}`;
        card.appendChild(h2);

        let p1 = document.createElement("p");
        p1.innerHTML = `${towns[i].motto}`;
        h2.classList.add("p1")
        card.appendChild(p1);

        let p2 = document.createElement("p");
        p2.innerHTML = `Year founded: ${towns[i].yearFounded}`;
        h2.classList.add("p2")
        card.appendChild(p2);

        let p3 = document.createElement("p");
        p3.innerHTML = `Population: ${towns[i].currentPopulation}`;
        h2.classList.add("p3")
        card.appendChild(p3);

        let p4 = document.createElement("p");
        p4.innerHTML = `Population: ${towns[i].averageRainfall}`;
        h2.classList.add("p4")
        card.appendChild(p4);

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });
