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
      if (i == 6) {
        let event = document.createElement("section");

        let ph2 = document.createElement("h2");
        ph2.classList.add("ph2");
        ph2.innerHTML = `Events`;
        event.appendChild(ph2);
      
        let preston = document.createElement('p');
        preston.innerHTML = `${towns[i].events}`;
        preston.classList.add("preston");
        event.appendChild(preston);

        document.getElementById("towneventsp").appendChild(event);
      }
      }});