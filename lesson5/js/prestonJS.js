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

