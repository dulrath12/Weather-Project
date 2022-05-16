
cityEl = $("#city")
submitEl = $("#submit")
cityList = $("#city-list")
cities = []

function pageLoad(){
    var storedCities = JSON.parse(localStorage.getItem("cities"))

    if (storedCities !== null) {
        cities = storedCities
    }

    renderCities()
}

function storedCities() {
    localStorage.setItem("cities", JSON.stringify(cities))
}

function renderCities(){
    cityList.empty();

    for (var i = 0; i < cities.length; i++) {
        var city = cities[i]

        var li = $("<li>").text(city)
        li.attr("id", "listC")
        li.attr("data-city", city)
        li.attr("class", "list-group-item")
        cityList.prepend(li)}

        if(!city){
            return
        }
        else{
            getWeather(city)
        }
}

submitEl.on("click", function(event){
    event.preventDefault();

    var city = cityEl.val().trim()

    if (city === "") {
        return
    }

    cities.push(city)

    storedCities();
    renderCities();
})




var responseWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=98ad45c0df8e458c68723b43de69d41d&units=imperial'

//var responseWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=98ad45c0df8e458c68723b43de69d41d'


function getWeather(cityName) {
    var responseWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=98ad45c0df8e458c68723b43de69d41d&units=imperial'
    var name = cityName
    var temp = responseWeather.main
    console.log(temp)
} 

submitEl.click(getWeather())





// https://api.openweathermap.org/geo/1.0/direct?q=''&appid=98ad45c0df8e458c68723b43de69d41d















fetch(responseWeather)
.then(function(Response) {
    return Response.json()
})
.then(data => {
    console.log(data)
})




