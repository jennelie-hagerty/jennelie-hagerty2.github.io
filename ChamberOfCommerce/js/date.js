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
  "May",
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

  document.querySelector("#lastModDate").textContent = fulldate;

  document.querySelector("#lastModDate").innerHTML = document.lastModified;
}