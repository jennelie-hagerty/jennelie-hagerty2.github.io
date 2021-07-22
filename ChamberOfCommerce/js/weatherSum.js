window.onload = currentdate;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function currentdate() {
  //Retrieve date from user's computer
  var d = new Date();
  var day = days[d.getDate()];
  var month = months[d.getMonth()];
  var year = d.getFullYear();

  let fulldate = `${day} "," ${month}  " " ${d.getDate()} "," ${year}`;

  document.querySelector("#lastModDate").textContent = fulldate;

  document.querySelector("#lastModDate").innerHTML = document.lastModified;
}


/*Current Weather*/
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?zip=28532,us&appid=262da0a1a160bae2ae592c408e28775d&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("current-temp").textContent = Math.round(jsObject.main.temp);
    document.getElementById("humidity").textContent = Math.round(jsObject.main.humidity);
    document.getElementById("condition").textContent = (jsObject.weather[0].main);
  });

  const temp = document.getElementById("current-temp").innerHTML;
  



  /*Fiveday Forecast*/
  const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?zip=28532,us&units=imperial&appid=7a8d08997888f7d4fa1ce88d0e56a068";

  fetch(fiveDayURL)
  .then((response) => response.json())
  .then((forecast) => {
    //console.log(forecast);
    
    for (let x in forecast.list) {
     
      if (forecast.list[x].dt_txt.includes("18:00:00")) {
        
        let dayBox = document.createElement("div");
        dayBox.setAttribute("class", "day-box");
        
        let weekDay = document.createElement('div');
        weekDay.setAttribute('class', 'week-day');
        let dayOfWeek = new Date(forecast.list[x].dt_txt);
        let dayNum = dayOfWeek.getDay();
        weekDay.textContent = days[dayNum];
        dayBox.appendChild(weekDay);
      
        let weatherIcon = document.createElement('img');
        const imagesrc = 'https://openweathermap.org/img/wn/' + forecast.list[x].weather[0].icon + '@2x.png';
        const desc = forecast.list[x].weather.description;
        weatherIcon.setAttribute('class', 'weather-icon');
        weatherIcon.setAttribute('src', imagesrc);
        weatherIcon.setAttribute('alt', desc);
        dayBox.appendChild(weatherIcon);
        
        let foreTemp = document.createElement("p");
        foreTemp.setAttribute("class", "fore-temp");
        foreTemp.innerHTML = Math.round(forecast.list[x].main.temp_max) + " &deg;F";
        dayBox.appendChild(foreTemp);
        
        document.querySelector(".forecastSection").appendChild(dayBox);
      }
    
}});