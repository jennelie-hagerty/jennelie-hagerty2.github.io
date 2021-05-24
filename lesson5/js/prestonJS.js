const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 641) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */


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

  document.querySelector("#currentdate").textContent = fulldate;

  document.querySelector("#currentdate").innerHTML = document.lastModified;
}
