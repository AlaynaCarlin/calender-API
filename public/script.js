//* URL
// ** firebase deploy **
const baseURL = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=US&year=2021";
const baseURL2 = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=MX&year=2021";
const baseURL3 = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=AU&year=2021";
const baseURL4 = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=CN&year=2021";
const baseURL5 = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=JP&year=2021";
const baseURL6 = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=GT&year=2021";

//*card elements   US
let cardTitle = document.getElementById('cardTitle');
let subtitle = document.getElementById('subtitle');
let text = document.getElementById('text');
  // * MX
let cardTitle2 = document.getElementById('cardTitle2');
let subtitle2 = document.getElementById('subtitle2');
let text2 = document.getElementById('text2');
  // * AU
let cardTitle3 = document.getElementById('cardTitle3');
let subtitle3 = document.getElementById('subtitle3');
let text3 = document.getElementById('text3');
  // * CN
let cardTitle4 = document.getElementById('cardTitle4');
let subtitle4 = document.getElementById('subtitle4');
let text4 = document.getElementById('text4');
  // * JP
let cardTitle5 = document.getElementById('cardTitle5');
let subtitle5 = document.getElementById('subtitle5');
let text5 = document.getElementById('text5');
  // * GT
let cardTitle6 = document.getElementById('cardTitle6');
let subtitle6 = document.getElementById('subtitle6');
let text6 = document.getElementById('text6');


//*button(s)
let usButton = document.getElementById('USButton');
let mxButton = document.getElementById('MXButton');
let auButton = document.getElementById('AUButton');
let cnButton = document.getElementById('CNButton');
let jpButton = document.getElementById('JPButton');
let gtButton = document.getElementById('GTButton');

//*event listener(s)
usButton.addEventListener('click', FetchHoly);
mxButton.addEventListener('click', mxHoliday);
auButton.addEventListener('click', auHoliday);
cnButton.addEventListener('click', cnHoliday);
jpButton.addEventListener('click', jpHoliday);
gtButton.addEventListener('click', gtHoliday);


function randomInt (max) {
 return Math.floor(Math.random() * max);
}

// ! **  US Holiday  **
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

// ! **  Mexico Holiday  **
function mxHoliday (e) {
  fetch (baseURL2)
  .then(res => res.json())
  // .then(json => console.log(json));
  .then(json => randoHoliday2((json.response.holidays[randomInt(45)])));
}

function randoHoliday2 (day){
console.log(day);
cardTitle2.innerText = `Name: ${day.name}`;
subtitle2.innerText = `Date: ${day.date.iso}`;
text2.innerText = `description: ${day.description}`;
}

// ! **  Australia Holiday  **
function auHoliday (e) {
  fetch (baseURL3)
  .then(res => res.json())
  // .then(json => console.log(json));
  .then(json => randoHoliday3((json.response.holidays[randomInt(129)])));
}

function randoHoliday3 (day){
console.log(day);
cardTitle3.innerText = `Name: ${day.name}`;
subtitle3.innerText = `Date: ${day.date.iso}`;
text3.innerText = `description: ${day.description}`;
}

// ! **  China Holiday  **
function cnHoliday (e) {
  fetch (baseURL4)
  .then(res => res.json())
  // .then(json => console.log(json));
  .then(json => randoHoliday4((json.response.holidays[randomInt(57)])));
}

function randoHoliday4 (day){
console.log(day);
cardTitle4.innerText = `Name: ${day.name}`;
subtitle4.innerText = `Date: ${day.date.iso}`;
text4.innerText = `description: ${day.description}`;
}

// ! **  Japan Holiday  **
function jpHoliday (e) {
  fetch (baseURL5)
  .then(res => res.json())
  // .then(json => console.log(json));
  .then(json => randoHoliday5((json.response.holidays[randomInt(31)])));
}

function randoHoliday5 (day){
console.log(day);
cardTitle5.innerText = `Name: ${day.name}`;
subtitle5.innerText = `Date: ${day.date.iso}`;
text5.innerText = `description: ${day.description}`;
}

// ! **  Guatemala Holiday  **
function gtHoliday (e) {
  fetch (baseURL6)
  .then(res => res.json())
  // .then(json => console.log(json));
  .then(json => randoHoliday6((json.response.holidays[randomInt(23)])));
}

function randoHoliday6 (day){
console.log(day);
cardTitle6.innerText = `Name: ${day.name}`;
subtitle6.innerText = `Date: ${day.date.iso}`;
text6.innerText = `description: ${day.description}`;
}


