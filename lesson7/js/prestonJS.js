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
/**********************************************************************************************************************************/
var d = new Date();
function currentdate() {
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();

  var clocktext =
    "" +
    days[nday] +
    ", " +
    months[nmonth] +
    " " +
    ndate +
    ", " +
    nyear +
    " "; /*"+nhour+":"+nmin+":"+nsec+ap+"*/
  document.getElementById("currentdate").innerHTML = clocktext;
}

currentdate();
setInterval(currentdate, 1000);
/**********************************************************************************************************************************/
/*if (d.getDay() === 5) {
  document.getElementById('banner').style.display = 'block';
  }
  else {
      document.getElementById('banner').style.display = 'none';
  }*/

/**********************************************************************************************************************************/
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navlist");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 641) mainnav.classList.remove("responsive");
};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
/**********************************************************************************************************************************/
/*const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=262da0a1a160bae2ae592c408e28775d&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("current-temp").textContent = Math.round(
      jsObject.main.temp
    );
    document.getElementById("windspeed").textContent = Math.round(
      jsObject.wind.speed
    );
    document.getElementById("humidity").textContent = Math.round(
      jsObject.main.humidity
    );
    document.getElementById("condition").textContent = jsObject.weather[0].main;
  });

const temp = document.getElementById("current-temp").innerHTML;
const speed = document.getElementById("windspeed").innerHTML;

/*The formula to calculate the wind chill factor is f=35.74+0.6215t−35.75s0.16+0.4275ts0.16, 
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit,
and s is the wind speed in miles per hour.*/

/*if (temp <= 50 && speed > 3) {
  const answer = windChill(temp, speed);
  document.getElementById("windchill").innerHTML = answer;
} else {
  document.querySelector(".winC").innerHTML = "Windchill: N/A";
}

function windChill(temp, speed) {
  //Windchill formula: f = 35.74 + (0.6215 * t) - (35.75 (s ^ 0.16)) + (0.4275 * t * (s ^ 0.16))

  const s = Math.pow(speed, 0.16);
  const f = 35.74 + 0.6215 * temp - 35.75 * s + 0.4275 * temp * s;
  const fRounded = Math.round(f);
  return fRounded;
}

const fiveDayURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7a8d08997888f7d4fa1ce88d0e56a068";

fetch(fiveDayURL)
  .then((response) => response.json())
  .then((forecast) => {
    //console.log(forecast);

    for (let x in forecast.list) {
      if (forecast.list[x].dt_txt.includes("18:00:00")) {
        let dayBox = document.createElement("div");
        dayBox.setAttribute("class", "day-box");

        let weekDay = document.createElement("div");
        weekDay.setAttribute("class", "week-day");
        let dayOfWeek = new Date(forecast.list[x].dt_txt);
        let dayNum = dayOfWeek.getDay();
        weekDay.textContent = days[dayNum];
        dayBox.appendChild(weekDay);

        let weatherIcon = document.createElement("img");
        const imagesrc =
          "https://openweathermap.org/img/wn/" +
          forecast.list[x].weather[0].icon +
          "@2x.png";
        const desc = forecast.list[x].weather.description;
        weatherIcon.setAttribute("class", "weather-icon");
        weatherIcon.setAttribute("src", imagesrc);
        weatherIcon.setAttribute("alt", desc);
        dayBox.appendChild(weatherIcon);

        let foreTemp = document.createElement("p");
        foreTemp.setAttribute("class", "fore-temp");
        foreTemp.innerHTML =
          Math.round(forecast.list[x].main.temp_max) + " &deg;F";
        dayBox.appendChild(foreTemp);

        document.querySelector(".fivedaycontainer").appendChild(dayBox);
      }
    }
  });
/**********************************************************************************************************************************/
let stored = new Date(localStorage.getItem("stored"));

const oneDay = 1000 * 60 * 60 * 24;

let diffInTime = d.getTime() - stored.getTime();

let diffInDays = Math.round(diffInTime / oneDay);

if ("stored" in localStorage) {
  document.querySelector(".lastvisit").innerHTML = diffInDays + " days ago.";
} else {
  document.querySelector(".lastvisit").innerHTML = "This is your first visit!";
}

store();

function store() {
  localStorage.setItem("stored", d);
}
