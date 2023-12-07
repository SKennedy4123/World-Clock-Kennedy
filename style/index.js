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

updateTime();
setInterval(updateTime, 1000);
