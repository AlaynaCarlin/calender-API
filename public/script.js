//* URL
// ** firebase deploy **
const baseURL = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=US&year=2021";
const baseURL2 = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=Mexico&year=2021";

//*card elements
let cardTitle = document.getElementById('cardTitle');
let subtitle = document.getElementById('subtitle');
let text = document.getElementById('text');

//*button(s)
let usButton = document.getElementById('USButton');

//*event listener(s)
usButton.addEventListener('click', FetchHoly)


function randomInt (max) {
 return Math.floor(Math.random() * max);
}

function FetchHoly (e) {
    fetch (baseURL)
    .then(res => res.json())
    .then(json => randoHoliday((json.response.holidays[randomInt(480)])));
}

function randoHoliday (day){
  console.log(day);
  cardTitle.innerText = `Name: ${day.name}`;
  subtitle.innerText = `Date: ${day.date.iso}`;
  text.innerText = `description: ${day.description}`;
}