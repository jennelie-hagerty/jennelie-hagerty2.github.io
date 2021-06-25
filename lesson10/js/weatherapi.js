const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=262da0a1a160bae2ae592c408e28775d&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("current-temp").textContent = Math.round(jsObject.main.temp);
    document.getElementById("windspeed").textContent = Math.round(jsObject.wind.speed);
    document.getElementById("humidity").textContent = Math.round(jsObject.main.humidity);
    document.getElementById("condition").textContent = (jsObject.weather[0].main);
  });
