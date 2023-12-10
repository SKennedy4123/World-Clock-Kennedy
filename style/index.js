function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeELement = losAngelesElement.querySelector(".time");
losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
losAngelesTimeELement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeELement = ParisElement.querySelector(".time");
ParisTime = moment().tz("Europe/Paris");

ParisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
ParisTimeELement.innerHTML = ParisTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
}
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <div>
  <a href="index.html">All cities</a>
  </div>
  `;
  setTimeout(() => {
    updateCity(event)
  }, 1000);
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", updateCity);