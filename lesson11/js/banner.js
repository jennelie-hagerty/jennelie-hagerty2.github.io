/*****BANNER *****/
/*let days = [
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
];*/
/**********************************************************************************************************************************/
/*var d = new Date();
function currentdate() {

  var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear();

  var clocktext = "" + days[nday] + ", " + months[nmonth] + " " + ndate + ", " + nyear + " ";
  document.getElementById('currentdate').innerHTML = clocktext;
}

currentdate();
setInterval(currentdate, 1000);*/




if (d.getDay() === 5) {
  document.getElementById('banner').style.display = 'block';
  }
  else {
     document.getElementById('banner').style.display = 'none';
  }