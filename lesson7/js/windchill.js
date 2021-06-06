const temp = document.querySelector(".t").innerHTML;
const speed = document.querySelector(".w").innerHTML;

/*The formula to calculate the wind chill factor is f=35.74+0.6215t−35.75s0.16+0.4275ts0.16, 
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit,
and s is the wind speed in miles per hour.*/

if ((temp <= 50) && (speed > 3)) {
    const answer = windChill(temp, speed)
    document.querySelector(".wC").innerHTML = answer;
} else {
  document.querySelector(".winC").innerHTML = "N/A";
}

function windChill(temp, speed) {
  //Windchill formula: f = 35.74 + (0.6215 * t) - (35.75 (s ^ 0.16)) + (0.4275 * t * (s ^ 0.16))

  const s = Math.pow(speed, 0.16);
  const f = 35.74 + (0.6215 * temp) - (35.75 * (s)) + (0.4275 * temp * s);
  const fRounded = Math.round(f);
  return fRounded;
 
}
