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

/*function currentdate() {
  //Retrieve date from user's computer
  var d = new Date();
  var day = days[d.getDate()];
  var month = months[d.getMonth()];
  var year = d.getFullYear();

  let fulldate = `${day} "," ${month}  " " ${d.getDate()} "," ${year}`;

  document.querySelector("#currentdate").textContent = fulldate;

  document.querySelector("#currentdate").innerHTML = document.lastModified;
}*/

function currentdate(){
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
  //var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
  
  /*if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}
  
  if(nmin<=9) nmin="0"+nmin;
  if(nsec<=9) nsec="0"+nsec;*/
  
  var clocktext=""+days[nday]+", "+months[nmonth]+" "+ndate+", "+nyear+" ";/*"+nhour+":"+nmin+":"+nsec+ap+"*/
  document.getElementById('currentdate').innerHTML=clocktext;
  }
  
  currentdate();
  setInterval(currentdate,1000);


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navlist');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 641) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

