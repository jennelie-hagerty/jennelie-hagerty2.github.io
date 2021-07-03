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

        let towndiv = document.createElement('div');
        towndiv.classList.add("towndiv");
        card.appendChild(towndiv)

        let h2 = document.createElement("h2");
        h2.innerHTML = `${towns[i].name}`;
        towndiv.appendChild(h2);

        let townmotto = document.createElement('p');
        townmotto.innerHTML = `${towns[i].motto}`;
        townmotto.classList.add("townmotto");
        towndiv.appendChild(townmotto);

        let yearfounded = document.createElement('p');
        yearfounded.innerHTML = `Year founded: ${towns[i].yearFounded}`;
        yearfounded.classList.add("yearfounded");
        towndiv.appendChild(yearfounded);

        let population = document.createElement('p');
        population.innerHTML = `Population: ${towns[i].currentPopulation}`;
        population.classList.add("population");
        towndiv.appendChild(population);

        let rainfall = document.createElement('p');
        rainfall.innerHTML = `Annual Rain Fall: ${towns[i].averageRainfall}`;
        rainfall.classList.add("rainfall");
        towndiv.appendChild(rainfall);

        let townimage = document.createElement('img');
        
          if (i == 0) {
            townimage.setAttribute('src', 'images/sodasprings.jpg')
            townimage.setAttribute('alt', 'Image of ' + towns[i].name)
            card.setAttribute('id', 'sodasprings')
            card.appendChild(townimage);
          } 

          if (i == 2) {
            townimage.setAttribute('src', 'images/fishhaven.jpg')
            townimage.setAttribute('alt', 'Image of ' + towns[i].name)
            card.setAttribute('id', 'fishhaven')
            card.appendChild(townimage);
          } 

          if (i == 6) {
            townimage.setAttribute('src', 'images/preston.jpg')
            townimage.setAttribute('alt', 'Image of ' + towns[i].name)
            card.setAttribute('id', 'preston')
            card.appendChild(townimage);
          } 

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });
