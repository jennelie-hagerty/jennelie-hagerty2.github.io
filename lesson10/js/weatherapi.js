const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=262da0a1a160bae2ae592c408e28775d&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("current-temp").textContent = Math.round(jsObject.main.temp);
    document.getElementById("windspeed").textContent = Math.round(jsObject.wind.speed);
    document.getElementById("humidity").textContent = Math.round(jsObject.main.humidity);
    document.getElementById("condition").textContent = (jsObject.weather[0].main);
  });

  

const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=262da0a1a160bae2ae592c408e28775d";
fetch(forecast) 
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  for (let x in forecast.list) {
    if (forecast.list[x].dt_txt.includes("18:00:00")) {
      let firstday = document.createElement("div")
      div.classList.add("firstday")
      card.appendChild(firstday);


      document.querySelector(".fivedaycontainer").appendChild(firstday);
    }
  }
    
})


  