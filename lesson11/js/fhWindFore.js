/*Wind Speed and Current Weather*/
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=42.0372&lon=-111.3960&units=imperial&appid=262da0a1a160bae2ae592c408e28775d";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("fhcurrent-temp").textContent = Math.round(jsObject.main.temp);
    document.getElementById("fhwindspeed").textContent = Math.round(jsObject.wind.speed);
    document.getElementById("fhhumidity").textContent = Math.round(jsObject.main.humidity);
    document.getElementById("fhcondition").textContent = (jsObject.weather[0].main);
  });

  const temp = document.getElementById("fhcurrent-temp").innerHTML;
  const speed = document.getElementById("fhwindspeed").innerHTML;
  
  /*The formula to calculate the wind chill factor is f=35.74+0.6215t−35.75s0.16+0.4275ts0.16, 
  where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit,
  and s is the wind speed in miles per hour.*/
  
  if ((temp <= 50) && (speed > 3)) {
      const answer = windChill(temp, speed)
      document.getElementById("fhwindchill").innerHTML = answer;
  } else {
    document.querySelector(".fhwinC").innerHTML = "Windchill: N/A";
  }
  
  function windChill(temp, speed) {
    //Windchill formula: f = 35.74 + (0.6215 * t) - (35.75 (s ^ 0.16)) + (0.4275 * t * (s ^ 0.16))
  
    const s = Math.pow(speed, 0.16);
    const f = 35.74 + (0.6215 * temp) - (35.75 * (s)) + (0.4275 * temp * s);
    const fRounded = Math.round(f);
    return fRounded;
   
  }


  /*Fiveday Forecast*/
  const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=-111.3960&units=imperial&appid=7a8d08997888f7d4fa1ce88d0e56a068";

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
        
        document.querySelector(".fhfivedaycontainer").appendChild(dayBox);
      }
    
}});