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
  const temp = document.getElementById("current-temp").innerHTML;
  const speed = document.getElementById("windspeed").innerHTML;
  
  /*The formula to calculate the wind chill factor is f=35.74+0.6215t−35.75s0.16+0.4275ts0.16, 
  where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit,
  and s is the wind speed in miles per hour.*/
  
  if ((temp <= 50) && (speed > 3)) {
      const answer = windChill(temp, speed)
      document.getElementById("windchill").innerHTML = answer;
  } else {
    document.querySelector(".winC").innerHTML = "Windchill: N/A";
  }
  
  function windChill(temp, speed) {
    //Windchill formula: f = 35.74 + (0.6215 * t) - (35.75 (s ^ 0.16)) + (0.4275 * t * (s ^ 0.16))
  
    const s = Math.pow(speed, 0.16);
    const f = 35.74 + (0.6215 * temp) - (35.75 * (s)) + (0.4275 * temp * s);
    const fRounded = Math.round(f);
    return fRounded;
   
  }