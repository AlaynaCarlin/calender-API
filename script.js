//* URL
const baseURL = " 'https://calendarific.com/api/v2/holidays?api_key=fb928595c436941d6cbbcd4b408bc64c8300491c&country=US&year=2021"

fetch (baseURL)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));