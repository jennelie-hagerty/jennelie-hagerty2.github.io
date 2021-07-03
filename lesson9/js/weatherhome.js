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
/*if (d.getDay() === 5) {
  document.getElementById('banner').style.display = 'block';
  }
  else {
     document.getElementById('banner').style.display = 'none';
  }*/

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
  function adjustRating(rating) {
    document.getElementById("severityvalue").innerHTML = rating;
  }
/**********************************************************************************************************************************/
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
      if (i == 0 || i == 2 || i == 6) {
        let card = document.createElement("section");

        let h2 = document.createElement("h2");
        h2.innerHTML = `${towns[i].name}`;
        card.appendChild(h2);

        let p1 = document.createElement("p");
        p1.innerHTML = `${towns[i].motto}`;
        p1.classList.add("p1");
        card.appendChild(p1);

        let p2 = document.createElement("p");
        p2.innerHTML = `Year founded: ${towns[i].yearFounded}`;
        p2.classList.add("p2");
        card.appendChild(p2);

        let p3 = document.createElement("p");
        p3.innerHTML = `Population: ${towns[i].currentPopulation}`;
        p3.classList.add("p3");
        card.appendChild(p3);

        let p4 = document.createElement("p");
        p4.innerHTML = `Annual Rain Fall: ${towns[i].averageRainfall}`;
        p4.classList.add("p4");
        card.appendChild(p4);

        let i1 =document.createElement("img");
        i1.innerHTML = `${towns[i].photo}`;
        i1.classList.add("i1");
        card.appendChild(i1);

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });
