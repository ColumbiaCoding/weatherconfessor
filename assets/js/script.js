var apiKey = '9a416b3b0fea4d6e4f9dca421a3b8b21'
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?'
var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
var unitConverter = u

var cityInput = document.querySelector('city')
var searchForm = document.querySelector('submit')
const input = document.getElementById('city')
const button = document.getElementById('submit')

function start(event){
    event.preventDefault()
// capture the value that the user types in to the city input
const geolocation = fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (geolocation) {
    console.log(geolocation);
  });
cityWeather()
forecast()
}

function cityWeather(){
    // run the weatherUrl in a fetch ith that city name
    const cityForecast = fetch(`${weatherUrl}&units=imperial&lat=${geolocation.coord.lat}&units=imperial&log=${geolocation.coord.log}&appid=${apiKey}`)

}

function forecast(){
     // run the forecastUrl in a fetch ith that city name
}


button.addEventListener('click', start)

//using local storage create a button. It's a search history. how to storage multiple values in one local stoage in one key. In a array of sorts...  (those words have to be clickable, so it could run the apis all over again.)