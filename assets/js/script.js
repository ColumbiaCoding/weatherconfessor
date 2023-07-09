var apiKey = "9a416b3b0fea4d6e4f9dca421a3b8b21"
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?"
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?"

var cityInput = document.querySelector('')
var searchForm = document.querySelector('')

function start(event){
    event.preventDefault()
// capture the value that the user types in to the city input

cityWeather()
forecast()
}

function cityWeather(){
    // run the weatherUrl in a fetch ith that city name

}

function forecast(){
     // run the forecastUrl in a fetch ith that city name
}


searchForm.addEventListener('submit', start)

//using local storage create a button. It's a search history. how to storage multiple values in one local stoage in one key. In a array of sorts...  (those words have to be clickable, so it could run the apis all over again.)