const api = {
    key: "022da4ce666be16f918fc81dc5e14ba3",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keydown', setQuery);

//Get the name of the city that is searched for
function setQuery(event) {
    if (event.key == 'Enter') {
        getData(searchBox.value);
    }
}

function getData(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    //update the city name
    let cityName = document.querySelector('.city');
    cityName.innerText = `${weather.name}, ${weather.sys.country}`

    //update the date to current date
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);

    //update temperature
    let temp = document.querySelector('.temp-value')
    temp.innerText = `${Math.round(weather.main.temp)}`

    //update weather type
    let weatherType = document.querySelector('.weather-value')
    weatherType.innerText = weather.weather[0].main

    //update low temp
    let lowTemp = document.querySelector('.lo-temp')
    lowTemp.innerHTML = `${Math.round(weather.main.temp_min)}<span>°C</span>`

    //update high temp
    let highTemp = document.querySelector('.hi-temp')
    highTemp.innerHTML = `${Math.round(weather.main.temp_max)}<span>°C</span>`
}

function dateBuilder(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    return `${day}, ${date} ${month}, ${year}`
}