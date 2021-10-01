//* URL
// ** firebase deploy **
// const baseURL = "https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=US&year=2019";

fetch ("https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=US&year=2019")
    .then(res => res.json())
    .then(function (json) {
      console.log(json)
    });