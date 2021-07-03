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

  var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear();

  var clocktext = "" + days[nday] + ", " + months[nmonth] + " " + ndate + ", " + nyear + " ";/*"+nhour+":"+nmin+":"+nsec+ap+"*/
  document.getElementById('currentdate').innerHTML = clocktext;
}

currentdate();
setInterval(currentdate, 1000);
/**********************************************************************************************************************************/
if (d.getDay() === 5) {
  document.getElementById('banner').style.display = 'block';
  }
  else {
     document.getElementById('banner').style.display = 'none';
  }

/**********************************************************************************************************************************/
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navlist');

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => { if (window.innerWidth > 641) mainnav.classList.remove('responsive') };

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
/**********************************************************************************************************************************/
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
  //console.log(jsObject);

  for (let x in forecast.list) {
    if (forecast.list[x].dt_txt.includes("18:00:00")) {
      let firstday = document.createElement("div")
      div.classList.add("firstday")
      card.appendChild(firstday);

      document.querySelector(".fivedaycontainer").appendChild(firstday);
    }
  }
    
})
/**********************************************************************************************************************************/